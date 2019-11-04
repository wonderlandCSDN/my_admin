'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

    /* 某某 */
    /* BASE_API_ROOT: '"http://主机号:端口号"',
    JWT_API_ROOT: '"http://主机号:端口号"', */

    /**本地 */
    BASE_HOST_NAME: 'localhost'
})
