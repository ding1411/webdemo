# webdemo

Demo for 春苗计划

预览请前往：[测试文档](https://papewhit.github.io/webdemo/dist/ "网页预览")

CSS 源文件位于 `css/` 目录下，使用 Tailwindcss 框架及 PostCSS 预处理器编辑；输出目录及 html 文件位于 `dist/` 。

`css/` 目录中的 `style.css` 是页面使用的主要样式表，附加样式表使用 `@import` 方法引入到该样式表的头部。

**后续更改请写入** `css/style.css`  **文档中，或在独立的 CSS 文档中编辑后使用** `@import` **方法加入该文档头部。**


## 版本管理

使用 [Git](https://git-scm.com/) 进行版本管理，使用方法可参考 [Git 教程](https://www.runoob.com/git/git-tutorial.html) 及 [Git 官方文档](https://git-scm.com/docs) 。

\* Visual Studio Code 编辑器内置有 Git 。

Github 提供 [Github Desktop](https://desktop.github.com/) ，设置简单且拥有易于操作的图形界面。

## 开发工具

[PostCSS](https://www.postcss.com.cn/) 和 [TailwindCSS](https://tailwindcss.cn/) （ + Visual Studio Code）。

### Node.js &amp; npm

[Node.js 官网](https://nodejs.org/) 和 [npm 使用介绍](https://www.runoob.com/nodejs/nodejs-npm.html)

\* PostCSS 和 TailwindCSS 的前置依赖。能够安装 Node.js 和基本使用 npm 即可。

### PostCSS

> 是一个用 JavaScript 工具和插件转换 CSS 代码的工具  
> A tool for transforming CSS with JavaScript

\* 不必过多研究，只需知道是 TailwindCSS 的依赖

### TailwindCSS

> Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。  
> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

官方文档：[中文文档](https://tailwindcss.cn/docs) / [英文文档](https://tailwindcss.com/docs)

请参阅 [安装](https://www.tailwindcss.cn/docs/installation) 和 [使用预处理器](https://www.tailwindcss.cn/docs/using-with-preprocessors) 两节以完成安装。


## 安装开发环境

### 1. 安装 [Node.js](https://nodejs.org/)

### 2. 使用 npm 安装 PostCSS、TailwindCSS 和其他依赖项

打开终端（如 cmd、 PowerShell 等），切换至项目目录

``` shell
cd <当前目录的路径>
```

进行初始化（按提示输入内容或回车以使用默认设置），创建 `package.json` 文件

``` shell
npm init
```

使用 `npm install` 命令安装组件

``` shell
npm install -D postcss-cli postcss-import autoprefixer tailwindcss
```

初始化 PostCSS 和 TailwindCSS ，创建 `postcss.config.js` 和 `tailwind.config.js` 两个文件

``` shell
npx tailwindcss init --postcss
```

为 PostCSS 添加插件，更改 `postcss.config.js` 内容为

``` js
module.exports = {
  plugins: [
      require('postcss-import'),
      require('tailwindcss/nesting'),
      require('tailwindcss'),
      require('autoprefixer'),
  ]
}
```

除 Git 外安装基本完成。

