/**
 * 模块作用域：和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块被访问。
 * 
 */
const { log } = require('console')
const module1 = require('./15.1-模块作用域')

log(username);//因为不能访问15.1中的变量，所以会报错