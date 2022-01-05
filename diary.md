# diary

## 2022-01-05 Esasset Doc

[doc](esasset/index.html)

## 2022-01-03 有感而發

智能駕駛來!  
國內好多用ROS2模型來開發  
有創新蔡同事識,好利害!!!   
[智能駕駛來](https://www.youtube.com/watch?v=RZ0fl1dPrgE)   

## 2021-12-31 前端工具 Webpack 
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
