# my_admin

> 基于Vue.js 2.x系列 + element-ui 内容管理系统解决方案

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## vue项目使用sass

1、安装sass相关插件 
npm install node-sass --save-dev
npm install sass-loader --save-dev

2、进入webpack.base.config.js配置scss
rrules: [
     {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      ......
]

3、在vue文件中声明使用
<style lang="scss" rel="stylesheet/scss"></style>

## vue项目多标签页实现思路
1、点击左侧菜单的每一项都会打开一个组件(对应一个路由)<br> 
2、第一次点击时将路由信息push到tagsList数组中 <br>
3、后面的每次点击都是通过watch $route执行添加标签方法 <br>
4、注意点：
<h6>删除时要考虑是否是对激活项进行关闭 若是则先删除数组中要关闭的标签的那个路由，然后获取剩余tagsList中的路由，让最后一个路由作为激活项</h6>
