# diary
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
