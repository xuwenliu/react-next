# react-next

react next 服务端渲染  https://nextjs.frontendx.cn/docs

# 初始化项目

```
    1.npm init --y
    2.npm install --save next react react-dom
    3.package.json 中添加
    "scripts": {
         "dev": "next --port=8090", //自定义端口 默认是  3000
        "build": "next build",
        "start": "next start"
    }
    4.新建pages文件夹 并创建index.js作为根页面
    5.npm run dev
```

# 使用css less sass stylus
    @zeit/next-css     https://www.npmjs.com/package/@zeit/next-css
    @zeit/next-less    https://www.npmjs.com/package/@zeit/next-less
    @zeit/next-sass    https://www.npmjs.com/package/@zeit/next-sass
    @zeit/next-stylus  https://www.npmjs.com/package/@zeit/next-stylus

    1.安装 
    //使用css
    npm install --save @zeit/next-css

    //使用sass
    npm install --save @zeit/next-sass node-sass

    //使用less 
    npm install --save @zeit/next-less less

    2.根目录 创建next.config.js

        //css 使用
        const withCSS = require('@zeit/next-css');
        module.exports = withCSS()

    3.根目录 创建style文件夹 index.css 如果使用sass则创建 **.scss 文件 使用less就创建 **.less 文件

    4.去index.js 引入 import '../styles/index.css';

    5.如果要css 和 sass/less 同时使用 next.config.js 如下写：
    const withCSS = require('@zeit/next-css');
    const withSass = require('@zeit/next-sass');

    module.exports = {
        webpack(config, ...args) {
            config = withCSS().webpack(config, ...args);
            config = withSass().webpack(config, ...args);
            return config;
        }
    }

    6.内联样式   https://nextjs.frontendx.cn/docs/#%E6%94%AF%E6%8C%81%E5%B5%8C%E5%85%A5%E6%A0%B7%E5%BC%8F


# 使用redux

新建项目 运行命令 yarn create next-app --example with-redux 项目名称


# 部署
1. yarn build
2. yarn start
