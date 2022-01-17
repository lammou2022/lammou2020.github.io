"""
This file contains all of the configuration values for the application.
Update this file with the values for your specific project.
"""
import os

MAX_CONTENT_LENGTH = 8 * 1024 * 1024
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])
#Image Path
UPLOAD_FOLDER=os.getcwd()+"\\TEMP"

# The secret key is used by Flask to encrypt session cookies.
# [START secret_key]
SECRET_KEY = 'catcat'
SESSION_COOKIE_NAME='connect.sid'
#test redis 6378
REDIS_PORT=6379

# [END secret_key]

#DATA_BACKEND = 'mysql'
DATA_BACKEND = 'sqlite'

MYSQL_HOST='127.0.0.1'
#MYSQL_USER = 'bookshelfmanager'
#MYSQL_PASSWORD = 'None'
MYSQL_DATABASE = 'bookshelf'

SQLITE_PATH=os.getcwd()+"\\bookshelf.db"

SQLALCHEMY_SQLITE_URI = ( 'sqlite:///{path}').format(path=SQLITE_PATH)

SQLALCHEMY_MYSQL_URI = (
    'mysql+pymysql://{user}:{password}@{host}:3306/{database}').format(
        user=MYSQL_USER, password=MYSQL_PASSWORD,host=MYSQL_HOST,
        database=MYSQL_DATABASE)

if DATA_BACKEND=='mysql':
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_MYSQL_URI
else:
    SQLALCHEMY_DATABASE_URI = SQLALCHEMY_SQLITE_URI
