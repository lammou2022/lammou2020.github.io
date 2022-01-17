# flask

這是保全的孤本。請好好珍惜。最新版本只有firebase。   

https://cloud.google.com/appengine/docs/standard/nodejs/tutorials

https://cloud.google.com/python/docs/getting-started

![](https://cloud.google.com/languages/images/bookshelf-homepage.png
)

![](https://cloud.google.com/languages/images/bookshelf-add-book.png)

![](https://cloud.google.com/languages/images/moby-dick-bookshelf-no-image.png)

![](https://cloud.google.com/languages/images/moby-dick-bookshelf-with-image.png)

```cmd
turtor\
   config.py
   main.py
   requirements.txt
   books\
         static
         templates
                \
                base.html
                form.html
                list.html
                view.tml
         _init_.py
         crud.py
         model_cloudsql.py
         storage.py
```

## requirements.txt

```text
Flask==1.1.1
oauth2client==4.1.3
Flask-SQLAlchemy==2.3.2
PyMySQL==0.9.2
six==1.11.0
flask-session==0.3.1
```

## config.py

```python
import os
MAX_CONTENT_LENGTH = 8 * 1024 * 1024
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
UPLOAD_FOLDER=os.getcwd()+"\\TEMP"
REDIS_PORT=6379
SQLITE_PATH=os.getcwd()+"\\books.db"
SQLALCHEMY_SQLITE_URI = ( 'sqlite:///{path}').format(path=SQLITE_PATH)
SECRET_KEY = 'cat'
SESSION_COOKIE_NAME='connect.sid'
DATA_BACKEND = 'sqlite'
if DATA_BACKEND=='sqlite':
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_SQLITE_URI
```

## main.py

```python
import books
import config

app = books.create_app(config)

if __name__ == '__main__':
    app.run( host="0.0.0.0",port=80, debug=True)
```

## books/_init_.py

```python
import json
import logging
from functools import wraps
from flask import current_app, Flask, redirect, request, session, url_for
import httplib2
from flask_session import Session

records = [  { "id":1,"user": "admin" ,"pass":"123","displayName":"admin"} ]

def create_app(config, debug=False, testing=False, config_overrides=None):
    
    app = Flask(__name__)
    app.config.from_object(config)

    app.debug = debug
    app.testing = testing

    if config_overrides:
        app.config.update(config_overrides)

    # Configure logging
    if not app.testing:
        logging.basicConfig(level=logging.INFO)

    # Setup the data model.
    with app.app_context():
        model = get_model()
        model.init_app(app)
    #app.config['SESSION_TYPE'] = 'redis'  # session类型为redis
    #app.config['SESSION_REDIS'] = redis.Redis(host='127.0.0.1',port=app.config['REDIS_PORT'])  
    app.config['SESSION_PERMANENT'] = False  # 如果设置为True，则关闭浏览器session就失效。
    app.config['SESSION_USE_SIGNER'] = False  # 是否对发送到浏览器上session的cookie值进行加密
    app.config['SESSION_KEY_PREFIX'] = 'sess:'  # 保存到session中的值的前缀
    Session(app)

    # Add a logout handler.
    @app.route('/logout')
    def logout():
        # Delete the user's profile and the credentials stored by oauth2.
        del session['profile']
        session.modified = True
        return redirect(url_for('index'))
        #oauth2.storage.delete()
        #return redirect(request.referrer or '/')

    # [END logout]

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            username = request.form['username']
            password = request.form['password']
            #session['username']
            for record in records:
              if username == record['user'] and  password == record['pass'] :
                 session['profile'] =  record
                 return redirect(url_for('index'))
            
        return '''
            <div style="margin-top: 20%;margin-left:50%;margin-right:50%">
            <form method="post">
                <p>USER:<input type=text name=username>
                <p>PASS:<input type=password name=password>
                <p><input type=submit value=Login>
            </form>
            </div>
        '''


    # Register the Assets CRUD blueprint.
    from .crud import crud
    app.register_blueprint(crud, url_prefix='/assets')


    # Add a default root route.
    @app.route("/")
    def index():
        return redirect(url_for('crud.list'))
    

    # Add an error handler. This is useful for debugging the live application,
    # however, you should disable the output of the exception for production
    # applications.
    @app.errorhandler(500)
    def server_error(e):
        return """
        An internal error occurred: <pre>{}</pre>
        See logs for full stacktrace.
        """.format(e), 500

    return app

def get_model():
    from . import model_cloudsql
    model = model_cloudsql
    return model


def login_required_auth(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if session.get('profile') is None:
            return redirect(url_for('login', next=request.url))
        return f(*args, **kwargs)
    return decorated_function
```


## books/crud.py

```python
from books import login_required_auth, get_model,  storage
from flask import Blueprint, current_app, redirect, render_template, request, \
    session, url_for

crud = Blueprint('crud', __name__)


def upload_image_file(file):
    if not file:
        return None
    public_url = storage.upload_file(
        file.read(),
        file.filename,
        file.content_type
    )
    current_app.logger.info(
        "Uploaded file %s as %s.", file.filename, public_url)
    return public_url


@crud.route("/")
def list():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')
    books, next_page_token = get_model().list(cursor=token)
    return render_template(
        "list.html",
        books=books,
        next_page_token=next_page_token)


# [START list_mine]
@crud.route("/mine")
@login_required_auth
def list_mine():
    token = request.args.get('page_token', None)
    if token:
        token = token.encode('utf-8')
    books, next_page_token = get_model().list_by_user(
        user_id=session['profile']['id'],
        cursor=token)
    return render_template(
        "list.html",
        books=books,
        next_page_token=next_page_token)
# [END list_mine]

@crud.route('/<id>')
def view(id):
    asset = get_model().read(id)
    return render_template("view.html", asset=asset)


# [START add]
@crud.route('/add', methods=['GET', 'POST'])
@login_required_auth
def add():
    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        # If an image was uploaded, update the data to point to the new image.
        image_url = upload_image_file(request.files.get('image'))

        if image_url:
            data['imageUrl'] = image_url

        # If the user is logged in, associate their profile with the new book.
        if 'profile' in session:
            data['createdBy'] = session['profile']['displayName']
            data['createdById'] = session['profile']['id']

        asset = get_model().create(data)

        return redirect(url_for('.view', id=asset['id']))

    return render_template("form.html", action="Add", asset={})
# [END add]


@crud.route('/<id>/edit', methods=['GET', 'POST'])
@login_required_auth
def edit(id):
    asset = get_model().read(id)

    if request.method == 'POST':
        data = request.form.to_dict(flat=True)

        image_url = upload_image_file(request.files.get('image'))

        if image_url:
            data['imageUrl'] = image_url

        asset = get_model().update(data, id)

        return redirect(url_for('.view', id=asset['id']))

    return render_template("form.html", action="Edit", asset=asset)

@crud.route('/<id>/delete')
@login_required_auth
def delete(id):
    get_model().delete(id)
    return redirect(url_for('.list'))
```

## books/model_cloudsql.py

```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

builtin_list = list

db = SQLAlchemy()

# 繫結app和資料庫
#migrate = Migrate(db)
#manager = Manager()
#manager.add_command('db', MigrateCommand)

def init_app(app):
    # Disable track modifications, as it unnecessarily uses memory.
    app.config.setdefault('SQLALCHEMY_TRACK_MODIFICATIONS', False)
    db.init_app(app)


def from_sql(row):
    """Translates a SQLAlchemy model instance into a dictionary"""
    data = row.__dict__.copy()
    data['id'] = row.id
    data.pop('_sa_instance_state')
    return data


class Book(db.Model):
    __tablename__ = 'book'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    author = db.Column(db.String(255))
    logDate = db.Column(db.String(255))
    context = db.Column(db.String(255))
    imageUrl = db.Column(db.String(255))
    description = db.Column(db.String(4096))
    createdBy = db.Column(db.String(255))
    createdById = db.Column(db.String(255))

    def __repr__(self):
        return "<book(title='%s', author=%s)" % (self.title, self.author)

def list(limit=10, cursor=None):
    cursor = int(cursor) if cursor else 0
    query = (Book.query
             .order_by(Book.title)
             .limit(limit)
             .offset(cursor))
    books = builtin_list(map(from_sql, query.all()))
    next_page = cursor + limit if len(books) == limit else None
    return (books, next_page)


# [START list_by_user]
def list_by_user(user_id, limit=10, cursor=None):
    cursor = int(cursor) if cursor else 0
    query = (Book.query
             .filter_by(createdById=user_id)
             .order_by(Book.title)
             .limit(limit)
             .offset(cursor))
    books = builtin_list(map(from_sql, query.all()))
    next_page = cursor + limit if len(books) == limit else None
    return (books, next_page)
# [END list_by_user]


def read(id):
    result = Book.query.get(id)
    if not result:
        return None
    return from_sql(result)


def create(data):
    books = Book(**data)
    db.session.add(books)
    db.session.commit()
    return from_sql(books)


def update(data, id):
    books = Book.query.get(id)
    for k, v in data.items():
        setattr(books, k, v)
    db.session.commit()
    return from_sql(books)


def delete(id):
    Book.query.filter_by(id=id).delete()
    db.session.commit()


def _create_database():
    """
    If this script is run directly, create all the tables necessary to run the
    application.
    """
    app = Flask(__name__)
    app.config.from_pyfile('../config.py')
    init_app(app)
    with app.app_context():
        #db.drop_all()
        db.create_all()
    print("All tables created")

if __name__ == '__main__':
    _create_database()
    #manager.run()

```

## books/storage.py

```python
from __future__ import absolute_import
import datetime
from flask import current_app
import six
from werkzeug.utils import secure_filename
from werkzeug.exceptions import BadRequest
import os
from urllib.parse import quote


def _check_extension(filename, allowed_extensions):
    if ('.' not in filename or
            filename.split('.').pop().lower() not in allowed_extensions):
        raise BadRequest(
            "{0} has an invalid name or extension".format(filename))


def _safe_filename(filename):
    """
    ``filename.ext`` is transformed into ``filename-YYYY-MM-DD-HHMMSS.ext``
    """
    filename = secure_filename(filename)
    date = datetime.datetime.utcnow().strftime("%Y-%m-%d-%H%M%S")
    basename, extension = filename.rsplit('.', 1)
    return "{0}-{1}.{2}".format(basename, date, extension)


def upload_file(file, filename, content_type,UPLOAD_FOLDER):
    """
    Uploads a file to a given Cloud Storage bucket and returns the public url
    to the new object.
    """
    _check_extension(filename, current_app.config['ALLOWED_EXTENSIONS'])
    filename = _safe_filename(filename)
    file.save(os.path.join(UPLOAD_FOLDER, filename))
    url = f"/api/img/{quote(filename)}"

    if isinstance(url, six.binary_type):
        url = url.decode('utf-8')

    return url
```
