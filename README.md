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

最早標記式語言SGML。     

可延伸標記式語言（英語：Extensible Markup Language，簡稱：XML）是一種標記式語言。XML是從標準通用標記式語言（SGML）中簡化修改出來的。它主要用到的有可延伸標記式語言、可延伸樣式語言（XSL）、XBRL和XPath等。     

標記（Markup）與內容（content）    

XML文件的字元分為標記（Markup）與內容（content）兩類。標記通常以&lt;開頭，以&gt;結尾；或者以字元& 開頭，以;結尾。不是標記的字元就是內容。    

標籤（Tag）   

<pre style="color:white;">
start-tag，如&lt;section&gt;;
end-tag，如  &lt;/section&gt;;
empty-element tag，如&lt;line-break /&gt;.
</pre>

元素/內容（Element）    

元素是文件邏輯組成，或者在start-tag與匹配的end-tag之間。    

屬性（Attribute）    

屬性是一種標記結構，在start-tag或empty-element tag內部的「名字-值對」。例如：&lt;img src="madonna.jpg" alt="Madonna" /&gt;。每個元素中，一個屬性最多出現一次，一個屬性只能有一個值。

<pre style="color:white;">
&lt;?xml version="1.0"?>
  &lt;小纸条&gt;
    &lt;收件人>大元&lt;/收件人&gt;
    &lt;發件人>小張&lt;/發件人&gt;
    &lt;主題>問候&lt;/主題&gt;
    &lt;具體內容>早啊，飯吃了沒？ &lt;/具體內容&gt;
  &lt;/小纸条&gt;
</pre>

HTML 出現比是XML早，互聯網上共享文字。從標準通用標記式語言（SGML）演化以來。      
HTML 的出現有一個好漂亮的名稱， 相對text,word文本來說，叫做"超文本" , link "超連結"。網絡普及化之后，現在沒人再講了。   

例:都想像MS Word排版    
標題:&lt;h1&gt; 表示標題開始，結束。 H1,H2,H3,H4,H5,H6 &lt;/h1&gt;         
段落:&lt;p&gt; 表示段落開始，結束。  &lt;/p&gt;          


[Hypertext Markup Language (HTML-01) June 1993](https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt)

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
<pre style="color:white;">
&lt;html&gt;
    &lt;head&gt;
        &lt;script&gt;
          /*   */
        &lt;/script&gt;
        &lt;style&gt;
          /*  */
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        /*   */
        內容
    &lt;/body&gt;
&lt;/html&gt;    
</pre>

學習html標準標籤排版功能      
A.標題字 h1..h6    
B.段落 p, div      
C.插入圖片 img     
D.超連結 a     
E.code pre   

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
有些段落特別顯示斜體。  
moreinfo 類的段落p 內部所有內容使用 font-style: italic 斜體字.   

CSS 選擇方式, 顯示模式   
tag {}   
.class_name 或 tag.class_name {}        
#id_name {}    
xpath {}    

ex:   
這里寫css清楚目標tag class id 來改變顯示字樣或圖型等效果。
對分析網頁結構，尋找目標內容自動分析數據，及自動填表等功能有好大幫助。        
有個css選擇器練習。高手可以試下。          

<h3>css Selector </h3>

[diner](https://flukeout.github.io/)   
[題目](diner.html)     
[解題](diner_ans.html)      
[ex0 簡化版](diner_ready.html)      

[ex1 簡化版](diner_ex1.html)      

已定義h1、 p、 div等等。   
自定義apple oragne pickle CSS樣式        

<pre style="color:white;">
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
orange,apple {
  -webkit-border-radius: 100px;
  border-radius: 100px;
  border-style: solid;
  border-width: 2px 4px 15px 4px;
  height: 60px;
  width: 60px;
  position: relative;
  margin: 20px 10px;
}

apple {
  background: #e41919;
  border-color: #ab1212;
}

orange {
  background: orange;
  border-color: #bd6e07;
}

pickle {
  background: #179837;
  width: 25px;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  border: solid 2px #025a18;
  border-width: 2px 2px 9px 2px;
  margin: 20px 10px;
}
orange,apple,pickle {
  box-shadow: 0px 5px 0px rgba(0,0,0,.2);
  display: inline-block;
  margin: 0 10px;
  height: 60px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;pickle&gt;&lt;/pickle&gt;
&lt;orange&gt;&lt;/orange&gt;
&lt;apple&gt;&lt;/apple&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

參考youtube電腦課程CS50      
[cs50 2020](https://www.youtube.com/watch?v=YoXxevp1WRQ&list=PLhQjrBD2T382_R182iC2gNZI9HzWFMC_8)      
[cs50 html css javascript](https://www.youtube.com/watch?v=Pawk7o9Tsds)     

參考書

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

```python
#2.1 寫文字檔:
def out_txt(msg):
    print(msg)
    with open(f"./news_title.txt", 'a',encoding='utf-8') as the_file:
        the_file.write(str(msg))
        the_file.write('\n')
out_txt("a")        
out_txt("b")        
out_txt("c")        
```

https://pypi.org/project/selenium/

```cmd
pip install selenium
```

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select
import time
import doc.config as cfg
home_url=cfg.hpd_home_url
options = Options()
options.add_argument('ignore-certificate-errors')
browser = webdriver.Chrome('./doc/chromedriver', options=options)
browser.set_window_size(400,800)  #browser.maximize_window()
browser.get(home_url)
browser.find_element_by_id('apply_name').send_keys("ABC")
browser.find_element_by_id('name1').send_keys("ABC")
browser.find_element_by_id('name2').send_keys("ABC")
browser.find_element_by_id('attendance').send_keys("3")
browser.find_element_by_id('tel').send_keys("12345678")
captcha_num=browser.find_element_by_id('captcha_num').get_attribute('innerHTML')
browser.find_element_by_id('captcha').send_keys(captcha_num)
browser.find_element_by_id('submitbtn').click()
time.sleep(2)
browser.save_screenshot(cfg.hpd_png)
browser.quit()
```

<h3>Requests & BeautifulSoup4</h3>
[Quick start](https://pypi.org/project/beautifulsoup4/)

```python
import requests
_url=f" https://xml.smg.gov.mo/c_actual_brief.xml "
_res = requests.get(_url)
_res.encoding = "utf-8"
print(_res.text)
```

```python
from bs4 import BeautifulSoup
import requests
_url=f"http://www.macaodaily.com/html/2020-12/20/node_1.htm"
_res = requests.get(_url)
_res.encoding = "utf-8"      #_res.text 完整HTML內容, 包含標籤指今文字, 不是直觀宜懂
soup = BeautifulSoup(_res.text, "html.parser")
links = soup.select("#all_article_list a")   #需學習CSS設定篩選選擇條件,篩選出新聞標題
for link in links:
    print(link.getText() )
```

<h3>Numpy Sympy MatPlotLib</h3>
[install](https://numpy.org/install/)

```python
from sympy import lambdify
import numpy as np
from matplotlib.figure import Figure
a=np.random.choice(range(4,10), 2) #list
b,c,d=np.random.choice([2,4,8],3)
expr= k*x+b
lam_x = lambdify(x, expr, modules=['numpy'])
x_vals = np.linspace(-5, 5, 10)
y_vals = lam_x(x_vals)
fig = Figure()
fig.set_figheight(3)
fig.set_figwidth(3)            
ax = fig.subplots()
ax.plot(x_vals, y_vals)
ax.axhline(0, color='black')
ax.axvline(0, color='black')            
fig.savefig(os.getcwd()+"\\static\\"+TE["PlotImg"])
#Or Save it to a temporary buffer.
#buf = BytesIO()
#fig.savefig(buf, format="png")
#data = base64.b64encode(buf.getbuffer()).decode("ascii")
#return f"<img src='data:image/png;base64,{data}'/>"        

def plotTriangle(t,BAngle,li,Path_):
    B, C, A = t.vertices #頂点
    AB, BC, CA = Segment(A, B), Segment(B, C), Segment(C, A) #辺の設定 右辺は ABC.sidesと同等
    a, b, c = BC.length, CA.length, AB.length #辺の長さ
    opposides = { A: BC, B: CA, C: AB } #頂点に対する対辺(opposite side) #print(AB,BC,CA ,*t.sides)    
    # Figure and Axes
    fig=Figure()
    fig.set_figheight(3)
    fig.set_figwidth(3)
    ax=fig.subplots()    
    #plt.close('all')
    #fig = plt.figure()
    #ax = fig.add_subplot(1, 1, 1)
    ax.set_aspect('equal')      #ax.grid()
    ax.set_axis_off() #軸の非表示
    ax.add_patch(plt.Polygon(t.vertices, fill=False))  
    ax.plot(*zip(*t.vertices), 'o') #'ro'
    ax.text(*B, '$\mathrm{B}$', ha='right', va='top') 
    ax.text(*C, '$\mathrm{C}$', ha='left', va='top')
    ax.text(*A, '$\mathrm{A}$', ha='left', va='bottom')
    squar_side_len=(a / 10)
    c1=Point(C[0],C[1]+squar_side_len)
    c2=Point(C[0]-squar_side_len,C[1]+squar_side_len)
    c3=Point(C[0]-squar_side_len,C[1])
    ax.add_patch(plt.Polygon([C,c1,c2,c3], fill=False))
    ax.text(*BC.midpoint, '$\mathrm{a } $', ha='right', va='top')
    ax.text(*CA.midpoint, '$\mathrm{b } $', ha='left', va='top')
    ax.text(*AB.midpoint, '$\mathrm{c } $', ha='left', va='bottom')  
    #Arc Plot
    if BAngle != None:
        d=np.arange(start=0,stop=BAngle,step=1)
        rad=np.deg2rad(d)
        r=(a/10)
        xc = r*np.cos(rad)
        yc = r*np.sin(rad)
        ax.plot(xc,yc,color=[20/255,20/255,20/255],linestyle='-')   
        ax.text(B[0]+r,B[1]+0.04,f'${BAngle}^o$')
    #plt.show()
    fig.savefig(os.getcwd()+"\\static\\"+Path_) 
    return Path_       
```

<h3>Pandas</h3>
[Getting_started](https://pandas.pydata.org/getting_started.html)

```python
#  id 性別 年齡 BMI A內下	A外下	A上下	A1	B內下	B外下	B上下	B1  C內下	C外下	C上下	C1  
import pandas as pd
df=pd.read_excel('data/DATA.xlsx',sheet_name='data',engine='openpyxl',index_col=0)   
df.head()
df.dtypes
fns="A內下	A外下	A上下	A1	B內下	B外下	B上下	B1  C內下	C外下	C上下	C1".split("\t")
for fn in fns:
    df1 = df[df[fn]=="X"]
    mean=round(df1["年齡"].mean(),2)
    std=round(df1["年齡"].std(),2)
    cnt=df1.shape[0]
    print(f"{fn}  有{cnt}筆年齡: {mean}+-{std}")
    M_F=df1["性別"].value_counts()
    M=M_F["M"]
    Mr=round(M/cnt,4)
    F=M_F["F"]
    Fr=round(F/cnt,4)
    print(f"{M} {Mr}  {F} {Fr}")
    displaySer(M_F)

count=0
for age in set(df["年齡"]):
    r=df[df["年齡"]==age].shape[0] 
    print(f"{age}  {r}")
    count+=r
print(count)

df1 = df[df["性別"]=="F"]
print(df1.shape[0])年齡
df1=  df1=="X" 
sum_s=df1.sum(axis=0)
#display(sum_s)

df1 = df[(df["BMI"]>=23) & (df["BMI"]<25)]
print(df1.shape[0])
df1=  df1=="X" 
sum_s=df1.sum(axis=0)
#display(sum_s)

df1 = df[(df["年齡"]>=75) & (df[""]<90)]
print(df1.shape[0])
df1=  df1=="X" 
sum_s=df1.sum(axis=0)
display(sum_s)
```

pearson R 相關性。     

```python
from scipy import stats
a = np.array([0, 0, 0, 1, 1, 1, 1])
b = np.arange(7)
stats.pearsonr(a, b)
(0.8660254037844386, 0.011724811003954649)
```

<h3>python-docx</h3>
[Release v0.8.11 (Installation)](https://python-docx.readthedocs.io/en/latest/)

```python
from docx import Document
from docx.shared import Inches

document = Document()

document.add_heading('Document Title', 0)

p = document.add_paragraph('A plain paragraph having some ')
p.add_run('bold').bold = True
p.add_run(' and some ')
p.add_run('italic.').italic = True

document.add_heading('Heading, level 1', level=1)
document.add_paragraph('Intense quote', style='Intense Quote')

document.add_paragraph(
    'first item in unordered list', style='List Bullet'
)
document.add_paragraph(
    'first item in ordered list', style='List Number'
)

document.add_picture('monty-truth.png', width=Inches(1.25))

records = (
    (3, '101', 'Spam'),
    (7, '422', 'Eggs'),
    (4, '631', 'Spam, spam, eggs, and spam')
)

table = document.add_table(rows=1, cols=3)
hdr_cells = table.rows[0].cells
hdr_cells[0].text = 'Qty'
hdr_cells[1].text = 'Id'
hdr_cells[2].text = 'Desc'
for qty, id, desc in records:
    row_cells = table.add_row().cells
    row_cells[0].text = str(qty)
    row_cells[1].text = id
    row_cells[2].text = desc

document.add_page_break()
document.save('demo.docx')
```

<h3>openopxl</h3>

[Installation](https://openpyxl.readthedocs.io/en/stable/#)

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
out_ws = out_wb.active
data=[1,2,3,4,5]
out_ws.append(data)
out_wb.save('out.xlsx')
```
## 六. grid_v2

combobox 



twolist



grid_v2 table2csv 

```pug 
extends ./base.pug
block content
  script(src='/javascripts/cool/grid_v2.js')
  script(src='/javascripts/cool/table2csv.js')
  .btn-group      
    a(href="#", class='btn btn-primary btn-sm')#exportcsv  下戴CSV  
    a(href="#", class='btn btn-primary btn-sm')#editbtn  編輯  
    a(href="#", class='btn btn-primary btn-sm')#readmodebtn 唯讀  
    a(href="#", class='btn btn-primary btn-sm')#savebtn 儲存  
div#tableContent  
    table.table
      tr 
        td id
        td#MA_H col_1
        td#MB_H col_2
        td#MC_H col_3
      each r in data
        tr
          td= r.id
          td.M(id=`MA_col-1_${r.id}`)= r.col_1
          td.M(id=`MA_col-2_${r.id}`)= r.col_2
          td.M(id=`MA_col-3_${r.id}`)= r.col_3
  script(type="text/javascript").
    var PostUrl='/api/JSON/updateSet' ;    
    $(document).ready(function(){
    	BindingFunctions("editbtn","savebtn",'readmodebtn');
    	BindingHead_EditMode(['MA_H','MB_H','MC_H']);
    	BindingFieldDefsIntegerFields({'MB':'INT','MF':'INT','MG':'INT'});
    	GenOriginalData();
       $("#exportcsv").on('click', function(event) {
        var args = [$('#tableContent>table'), 'export0.csv'];
        exportTableToCSV.apply(this, args);
      });
    });    
```

```js
/*api.js*/
const express = require('express');
const router = express.Router();
function getSQLiteModel () { return require(`./model-sqlite`);}
function getModel () { return require(`./model-mysql-pool`); }
router.get('/grid', require('connect-ensure-login').ensureLoggedIn(), (req, Response, next) => {
    getSQLiteModel().list((err,data)=>{
        Response.render('applyformMng/grid.pug', {
            profile:req.user,
            data:data
       });
    });
});
router.post('/api/JSON/updateSet/:rowid', images.multer.array('upload',16),    require('connect-ensure-login').ensureLoggedIn(), (req, Response, next) => {
  let data=req.body
  getSQLiteModel().UpdateDataSet(data,(err,result)=>{
      if(err){return Response.end(err.message) }
      Response.end(result)
  });
});
/*model_sqlite.js*/
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('bookshelf.db')
function list(cb) {
  db.serialize(function () {
      db.all('SELECT * FROM appform;', function (err, rows) {
          if (err) { cb(err); return; }
          cb(null, rows);
    })
  })
}
function UpdateDataSet(DataSet,cb) {
  db.serialize(function () {
    for(let prop in DataSet)
    {
        let fieldnamelist=[], valuelist=[];
        for(let fieldname in DataSet[prop])
        {
          fieldnamelist.push(`${fieldname}=?`);
          valuelist.push(DataSet[prop][fieldname]);
        }
        valuelist.push(prop);
        db.run(`UPDATE appform SET ${fieldnamelist.join(",")}  WHERE id=?`,valuelist,function(err){
          if(err){ cb(err);return; }
          cb(null,`updated!${this.changes}`)
        });
    }
  })
}
module.exports = {
    list: list,
    UpdateDataSet: UpdateDataSet,
}    
``` 

```js
/*mysql async await*/
const mysql = require('mysql');
const options = {
    host: '127.0.0.1',
    user: 'user',
    password: 'pass',
    database: 'db'
};
const pool = mysql.createPool(options);
function list(cb) {
    pool.getConnection(function (err, connection) {
        if(err){cb(err);return;}
        connection.query(
            'SELECT * FROM appform; ',[],
            (err, results) => {
                if (err) { cb(err); return; }
                cb(null, results);
                connection.release();
            }
        );
    });
}
async function UpdateDataSet(DataSet, cb) {
    pool.getConnection(async function (err, connection) {
        if (err) { cb(err); return; }
        let cnt = 0;
        for(let prop in DataSet)
        {
            cnt += await new Promise((resolve, reject) => {
                connection.query(`update appform set ? where id=?;`, [DataSet[prop], actcid], (err, res) => {
                    if (err) { console.log(err); reject(err); }
                    resolve(100);
                });
            });
        }
        cb(null, Math.floor(cnt / 100));
        connection.release();
        //let alist = Object.keys(aObj);
        //for (let i = 0; i < alist.length; i++) { let val = aObj[alist[i]]; }
    });
}
```
```python
# flask_sqlalshemy
# crud.py
@crud.route('/api/JSON/updateSet/<nothing>', methods=['GET', 'POST'])
@login_required_auth
def itemJsonUpdateSet(nothing):
    data=request.get_json()
    for itemid in data:
        if 'regSDate' in data[itemid]:
            data[itemid]['regSDate']=datetime.strptime(data[itemid]['regSDate'], '%Y-%m-%d')
        if 'itemno' in data:   
            if data[itemid]["itemno"]=="" or data[itemid]["itemno"]=="None" or data[itemid]["itemno"]==None:
                data[itemid]["itemno"]=None
            else:
                pass
    book = get_model().updateItem_DataSet(data)
    return "Update !"
# Model.py
def updateItem_DataSet(data):
    for id in data:
        acc = Item.query.get(id)
        for k, v in data[id].items():
            setattr(acc, k, v)
    db.session.commit()
    return ""
```


## 七. Summary_總結

回顧，學習程式設計這門課的時候，理論算法很多。導師還是提供了實戰機會，數學基礎，職業技能，軟件技術趋向，英語技能，前沿性，當時沒懂。

我想寫總結一下Web前端和Python后端的技能，還有SampleCode實作分享! 努力寫作中! 耐心等待....

我的[日記diary](diary.html)

[flask bookshelf](flask/ex1.html)

[expressjs bookshelf](nodejs/ex1.html)

我的動態域名,[464r747p64.qicp.vip](http://464r747p64.qicp.vip) 用不了,先留用着。   

contact to: mbc11thsp@gmail.com
