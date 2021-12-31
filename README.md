# lammou2020.github.io

## 前端工具 Webpack 學習
(QuickStart)[https://webpack.js.org/guides/getting-started/]  
npx webpack / npm run build     
npx webpack serve  
webpack.config.js devServ的public改為dist。   
```js
const path = require('path');
module.exports = {
    mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
      },      
    allowedHosts: 'auto',
  },
};
```

## 我的動態域名,看似用不了,先留用着。
464r747p64.qicp.vip
[My Rapberry Pi WebSite](http://464r747p64.qicp.vip)

## contact to lammou@mail.mbc.edu.mo
