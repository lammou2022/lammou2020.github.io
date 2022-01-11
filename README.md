# 網頁設計及應用-入門

## 前言

自我介紹，做過電腦老師及開發程式。每當培訓課時被問，隔離是公務員、慱企、大公營事業等等，我說自己還是有理想的，真是來學野的!

綜述個人對網站編程技能總結，寫一些最簡單用法，同學們分享。不足之處，請多指教!


## An overview of HTTP

![](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview/fetching_a_page.png)  

[An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)   

## Git/GitHub 源碼版本管理

網頁存於在github.io, 是github提供的功能!  

![](static/git_github.png)   


學習推薦     
👍[生產力Git課程](https://github.com/makzan/beginning-git-version-control)    
👍[Github QuickStart](https://docs.github.com/en/get-started/quickstart/hello-world)


簡單說明關係!   
GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.
源碼版本管理及恊作遠端雲平台，讓你同其人也一齊恊助完成項目(不限地點)。

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.(free and open source)源碼版本管理系統。

![](https://git-scm.com/book/en/v2/images/distributed.png)   

作業:

1. [安裝Git](https://git-scm.com/download/win)   

2. [註冊GitHub](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)  
假設:  
註冊Email: tigeryear2022@gmail.com   
註冊用戶: tigeryear2022    

3. Github Pages    
參考[Github Pages QuickStart](https://docs.github.com/cn/pages/getting-started-with-github-pages/creating-a-github-pages-site)     
假設: tigeryear2022.github.io 
選擇:Theme  
自動生index.md(使用Markdown文檔指令。)     

4. 使用Git指令   

git clone、 git add、commit、 push。   

```cmd
(env) C:\code>git clone https://github.com/tigeryear2022/tigeryear2022.github.io
Cloning into 'tigeryear2022.github.io'...
remote: Enumerating objects: 223, done.
remote: Counting objects: 100% (206/206), done.
remote: Compressing objects: 100% (184/184), done.
remote: Total 223 (delta 97), done.
Resolving deltas: 100% (97/97), done.
(env) C:\code>cd tigeryear2022.github.io
(env) C:\code\tigeryear2022.github.io>
(env) c:\code\tigeryear2022.github.io>git --global user.email="tigeryear2022@gmail.com"
(env) c:\code\tigeryear2022.github.io>git --global user="tigeryear2022"
(env) c:\code\tigeryear2022.github.io>notepad index.md 
(env) C:\code\tigeryear2022.github.io>git add .
(env) C:\code\tigeryear2022.github.io>git commit -m "update readme.md"
[main 77f5e2a] update readme.md 1 file changed, 12 insertions(+), 2 deletions(-)
(env) C:\code\tigeryear2022.github.io>git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
f8dbdd1..77f5e2a  main -> main

```


![](static/markdown.png)

[文檔書寫 MarkDowm](https://www.markdownguide.org/basic-syntax/)  

The Markdown Guide is a free and open-source reference guide that explains how to use Markdown, the simple and easy-to-use markup language you can use to format virtually any document.

## 一. Web 前端(html,css,js)

參考標準[w3](https://www.w3.org/standards/webdesign/)分類，HTML&CSS , JavaScript Web APIs 

![](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/execution.png)

HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)

我第一個HTML

文件結構
```text
static\a.js
static\a.css
static\a.png
first.html
index.md
```

我要書寫內容:
```text
    粵華南虎誕孖仔祝元旦
    
                   #&@,(#                                                       
               *(#/..(   &/%                                                    
               @(#@.(   %  @   @ *&@%##(////////*.                              
                 &#%%#@@ ,  .,*/   @    @   ((  @ ,& @@/                        
                        *@  @   #, (  , (  & (  *  & *.& %&                     
                         .&   / @  &  @ .  @ / &   * @ (*%,/ @/          *&     
                          @@/ ( / *% ,@ %(%@&&@@(@  , ,/&    (#% / //%@, &      
                         & (###@ .@.         # ..,(( ,,, @.                     
                        %   %   & */          ,. &     .@#&,                    
                      ,@%&*      &,@        ,& @,       %.,@                    
                   #%#@@,      &*@%/     .&@@#      .##* @    

    二○二二年是虎年，華南虎雙胞胎慶祝元旦。廣東省林業局今日發佈，二○二一年十二月三十一日二十三時○二分和二十六分，廣東粵北華南虎省級自然保護區管理處韶關華南虎繁育研究基地華南虎媽媽“夢夢”順利產下兩隻華南虎幼崽，這也是繼去年三月和九月迎來“圓圓”和“慶慶”兩隻雌性虎寶寶後，該繁育研究基地年內再次“迎新”。兩隻華南虎寶寶的出生也創下“一年三胎四仔”的高產紀錄。

    保護華南虎種群

    虎共有九個亞種，目前有三個亞種已滅絕，目前最為瀕臨滅絕的虎亞種是華南虎，是世界極度瀕危的十大物種之一，屬於國家一級保護動物。

    For more information . LinkTo http://www.macaodaily.com
```
HTML基本結構      
```html
html
    head
        script.
          //
        style.
          //
    body
        //
        內容
```
學習html標籤排版      
A.標題字 h1..h4    
B.段落 p, div      
C.插入圖片 img     
D.超連結 a    

[first.html](first.html)    
<pre style="color:white;">
&lt;html&gt;
  &lt;head&gt;
    &lt;script src=static/a.js&gt;&lt;/script&gt;
    &lt;script&gt;
      // do here;
    &lt;/script&gt;
    
    &lt;link rel="stylesheet" href="static/a.css"&gt;
    &lt;style&gt;
      /* do here */
      p.moreinfo { font-style: italic }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;粵華南虎誕孖仔祝元旦&lt;/h1&gt;
    &lt;img src=static/a.png&gt;  
    &lt;div&gt;
二○二二年是虎年，華南虎雙胞胎慶祝元旦。廣東省林業局今日發佈，二○二一年十二月三十一日二十三時○二分和二十六分，廣東粵北華南虎省級自然保護區管理處韶關華南虎繁育研究基地華南虎媽媽“夢夢”順利產下兩隻華南虎幼崽，這也是繼去年三月和九月迎來“圓圓”和“慶慶”兩隻雌性虎寶寶後，該繁育研究基地年內再次“迎新”。兩隻華南虎寶寶的出生也創下“一年三胎四仔”的高產紀錄。

    保護華南虎種群

    虎共有九個亞種，目前有三個亞種已滅絕，目前最為瀕臨滅絕的虎亞種是華南虎，是世界極度瀕危的十大物種之一，屬於國家一級保護動物。
    &lt;/div&gt;

    &lt;p class="moreinfo"&gt;For more information 
    &lt;a href="http://www.example.com/report"&gt;detail&lt;/a&gt;.&lt;/p&gt;

  &lt;/body&gt;
&lt;/html&gt;
</pre>

<p>
			   The <code>class</code> attribute on the
			   paragraph's start tag (&#x201C;&lt;p&gt;&#x201D;) can be
			   used, among other thing, to add style. For
			   instance, to italicize the text of all
			   paragraphs with a class of &#x201C;moreinfo,&#x201D; one
			   could write, in CSS:
</p>

<pre style="color:white;">
p.moreinfo { font-style: italic }
</pre>

https://www.bookstack.cn/read/html-tutorial/spilt.1.docs-elements.md

https://www.bookstack.cn/read/liyanhui-html-css/0.md

### JavaScript

基礎JS(variable, if, loop, function )         

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources

[廖雪峰 JavaScript 教程（202007）](https://www.bookstack.cn/read/liaoxuefeng-JavaScript-2020/cc19bec7412798fa.md) 

[现代 JavaScript 教程中文版](https://www.bookstack.cn/read/zh.javascript.info/7d8aef416b0f93b9.md)

https://www.bookstack.cn/read/es6/readme.md   

https://www.bookstack.cn/read/es6-3rd/spilt.1.docs-let.md     

https://www.bookstack.cn/read/es2016-es2017/8f14492603714635.md   

https://www.bookstack.cn/read/es2018-es2019/78052f44af846cbd.md       

https://www.bookstack.cn/books/front-end-database


[js內容](https://www.w3schools.com/js/DEFAULT.asp)   
[DOM內容](https://www.w3schools.com/js/js_htmldom.asp)    
[Async/Sync內容](https://www.w3schools.com/js/js_callback.asp)    
[AJAX內容](https://www.w3schools.com/js/js_ajax_intro.asp)    
[JSON內容](https://www.w3schools.com/js/js_json_intro.asp)    

### 進階應用jQuery及UI

jQuery是一套跨瀏覽器的JavaScript函式庫，用於簡化HTML與JavaScript之間的操作。
[You Don't Need jQuery中文版](https://www.bookstack.cn/read/You-Dont-Need-jQuery/ch8.md)
[jquery&UI](https://jquery.com/)   

<pre style="color:white;">
&lt;script src=https://code.jquery.com/jquery-3.6.0.min.js&gt;&lt;/script&gt;
&lt;script&gt;
$.get( "static/a.json", function( data ) {
  $( "body" )
    .append( "Name: " + data.name ) // John
    .append( "Time: " + data.time ); //  2pm
}, "json" );
&lt;/script&gt;
</pre>

### Bootstrap

自適應網頁設計(Responsive web design)，網頁自適應不同設備如, 電腦、手機、平板等設備Monitor尺寸。

[Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/)   

## 二.  Python 易學易用
從下圖看出易學易用。最適合快速上手的人士!講求正確,不求速度。  
python效能是相對的,對我們普通人來,速快足够快!     
易用性，還有Node JS。Go/Rust更具未來性，有餘力可以努力加油!       
![ease of use python](static/rust_lang.png)    
推薦👍[生產力Python課程](https://github.com/makzan/Beginning-Python-Course)

[安裝python 3.9.9 模組管理程式pip ](https://www.python.org/downloads/windows/)
```cmd
Python 3.9.9 - Nov. 15, 2021
Note that Python 3.9.9 cannot be used on Windows 7 or earlier.
Download Windows installer (64-bit)
```

## 三. 資料庫MySQL/SQLite,Redis     

![](static/database_category.png)     

[sqlite-tools-win32-x86-3370100.zip](https://sqlite.org/download.html)     

SQL簡單指令CREATE INSERT SELECT DELETE    
```cmd
sqlite3 DatabaseName.db
sqlite>CREATE TABLE COMPANY(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   AGE            INT     NOT NULL,
   ADDRESS        CHAR(50),
   SALARY         REAL
);
sqlite>INSERT INTO COMPANY (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Paul', 32, 'California', 20000.00 );
sqlite> SELECT * FROM COMPANY;
ID          NAME        AGE         ADDRESS     SALARY
----------  ----------  ----------  ----------  ----------
1           Paul        32          California  20000.0
sqlite>.quit
```

[Redis-x64-3.0.504.msi](https://github.com/microsoftarchive/redis/releases)

noSQL(KEY-VALUE, HASHTABLE,MAPTABLE)     
簡單指令SET GET HSET HGET HDEL MSET MGET FLUSHALL         
```cmd
redis-cli
127.0.0.1:6379> SET name "tigeryear2022" 
OK 
127.0.0.1:6379> GET name 
"tigeryear2022"
127.0.0.1:6379> exit
```

## 四. Web后端(Flask)

![](static/flask_django.png)二者皆為Python網站應用框架，我主要介紹Flask。   

The “micro” in microframework means Flask aims to keep the core simple but extensible.  
Flask是一個使用Python編寫的Web應用微框架。基於Werkzeug WSGI工具箱和Jinja2模板引擎，使用簡單的核心，用擴充增加其他功能。   
[doc](https://flask.palletsprojects.com/en/2.0.x/)   
安裝擴充模組     
```cmd
pip install Flask Flask-Session redis Flask-SQLAlchemy 
```
flask_ex.py    
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

# the application.
if __name__ == '__main__':
    app.run( host="0.0.0.0",port=8080, debug=True)
```

```cmd
python flask_ex.py
```

### Session會話

Flask-Session & redis    
flask_redis_ex.py     
```python
from flask import Flask, session
from flask.ext.session import Session

app = Flask(__name__)
# Check Configuration section for more details
SESSION_TYPE = 'redis'
app.config.from_object(__name__)
Session(app)

@app.route('/set/')
def set():
    session['key'] = 'value'
    return 'ok'

@app.route('/get/')
def get():
    return session.get('key', 'not set')

# the application.
if __name__ == '__main__':
    app.run( host="0.0.0.0",port=8080, debug=True)

```
```cmd
python flask_redis_ex.py
```

[doc](https://flask-session.readthedocs.io/en/latest/)

### ORM資料庫操作
Flask-SQLAlchemy A Minimal Application     

orm_ex.py    
```python
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

if __name__ == '__main__':
    #from yourapplication import db,User
    db.create_all()
    #from yourapplication import User
    admin = User(username='admin', email='admin@example.com')
    guest = User(username='guest', email='guest@example.com')
    db.session.add(admin)
    db.session.add(guest)
    db.session.commit()
    User.query.all()
    #[<User u'admin'>, <User u'guest'>]
    User.query.filter_by(username='admin').first()
    #<User u'admin'>
```

```cmd
python orm_ex.py  
```

[doc](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)

### 綜合應用例子    

[bookshelf](https://github.com/lammou2020/bookshelf)  

安裝所需模組      
requirements.txt   
```text 
Flask=1.1.2
Flask-SQLAlchemy=2.4.4
PyMySQL==0.9.2
six==1.15.0
Flask-Session=0.3.2
redis=3.5.3
PyMySQL=0.10.1
```
建立虛擬獨立運行環境        
python -m venv env    
啟動    
env\scripts\activate      
安裝模組    
pip install -r requirements.txt       
創建資料庫    
python bookshelf\model_cloudsql.py      
運行    
python main.py    
```cmd
git clone https://github.com/lammou2020/bookshelf
bookshelf>python -m venv env
bookshelf>env\scripts\activate
(env) bookshelf>pip install -r requirements.txt
(env) bookshelf>python bookshelf\model_cloudsql.py
(env) bookshelf>python main.py
```

## 五. 常用Python Module套件

```text
Requests 
Untangle
BeautifulSoup4
Selenium	
Numpy 
Pandas
MatPlotLib
python-docx
openpyxl
Scipy
Sympy
```
Installation
```cmd
$ pip install openpyxl
$ pip install pillow
```
read_xl.py
```python
from openpyxl import load_workbook
wb = load_workbook(filename = 'empty_book.xlsx')
col_s=[]
for sn_ in wb.sheetnames:
  ws=web[sn_]
  for cidx in range(65,90):
    c_name=ws[f"{chr(cidx)}{6}"].value
    if c_name==None: break
    col_s.append(c_name)
print(col_s)
```
write_xl.py
```python
from openpyxl import Workbook
out_wb = Workbook()
out_ws = wb.active
data=[1,2,3,4,5]
out_ws.append(data)
wb.save('out.xlsx')
```
## 六. Summary_總結

回顧，學習程式設計這門課的時候，理論算法很多。導師還是提供了實戰機會，數學基礎，職業技能，軟件技術趋向，英語技能，前沿性，當時沒懂。
我想寫總結一下Web前端和Python后端的技能，還有SampleCode實作分享! 努力寫作中! 耐心等待....

我的[日記diary](diary.html)

我的動態域名,[464r747p64.qicp.vip](http://464r747p64.qicp.vip) 用不了,先留用着。   

contact to: mbc11thsp@gmail.com
