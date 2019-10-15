'use strict'
module.exports = {
  NODE_ENV: '"production"'
}


// 获取当前正在运行的脚本名称
// npm 提供一个npm_lifecycle_event变量，返回当前正在运行的脚本名称，可以配合顺序钩子使用


/* let obj = {};
const target = process.env.npm_lifecycle_event;
if (target == 'test') {
  obj = {
      NODE_ENV: '"production"',
      BASE_API_ROOT: '"http://主机号:端口"',
      BASE_AUTO_LOGIN:'"http://主机号:端口"',
      BASE_UNION_LOGIN:'"http://主机号:端口/#/login"'
  }
}else if (target == 'development') {
  obj = {
    NODE_ENV: '"production"',
    BASE_API_ROOT: '"http://主机号:端口"',
    BASE_AUTO_LOGIN:'"http://主机号:端口"',
    BASE_UNION_LOGIN:'"http://主机号:端口/#/login"'
  }
}else{
  obj = {
    NODE_ENV: '"production"',
    BASE_API_ROOT: '"http://主机号:端口"',
    BASE_AUTO_LOGIN:'"http://主机号:端口"',
    BASE_UNION_LOGIN:'"http://主机号:端口/#/login"'
  }
} */
