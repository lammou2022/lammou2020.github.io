# bookshelf" 
## cmd

```cmd
python venv -m env   
path>env\scripts\activate   
path>pip instal -r requirements.txt  

## activate
path>env\scripts\activate

## initalize db
(env) path>python bookshelf\model_cloudsql.py

## run
(env) path>python main.py
```

```python
# config.py
import os
MAX_CONTENT_LENGTH = 8 * 1024 * 1024
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
# upload imag path
UPLOAD_FOLDER=os.getcwd()+"/IMAGEPATH/"
SECRET_KEY = 'cat'
SESSION_COOKIE_NAME='connect.sid'
#mysql_setting
MYSQL_HOST='127.0.0.1'
MYSQL_USER = ''
MYSQL_PASSWORD = ''
MYSQL_DATABASE = 'bookshelf'
SQLALCHEMY_MYSQL_URI = (
    'mysql+pymysql://{user}:{password}@{host}:3306/{database}').format(
        user=MYSQL_USER, password=MYSQL_PASSWORD,host=MYSQL_HOST,
        database=MYSQL_DATABASE)
#sqlite_setting
SQLITE_PATH=os.getcwd()+"\\bookshelf.db"
SQLALCHEMY_SQLITE_URI = ( 'sqlite:///{path}').format(path=SQLITE_PATH)
#DATA_BACKEND{sqlite/mysql}        
DATA_BACKEND = 'sqlite'
if DATA_BACKEND=='mysql':
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_MYSQL_URI
else:
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_SQLITE_URI
```


#mysql

my.ini

```ini
[mysqld]
basedir=c:/appserv/mysql
datadir=c:/appserv/mysql/data
[mysqld-8.0]
sql_mode=TRADITIONAL
```

```cmd
path>bin\mysqld --defaults-file=my.ini --initialize --console
-----
A temporary password is generated for root@localhost: qk-nm1!hE/4r
-----

path>mysql -u root -p

mysql>ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密碼';
```

#redis

https://github.com/microsoftarchive/redis/releases

# init db

```cmd
env\scripts\activate
bookshelf>python model_cloudsql.py
python main.py
```