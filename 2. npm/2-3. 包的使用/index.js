// var _ = require("lodash");

// console.log(_)
// // var arr = _.compact([1, 3, 0, "", false, 5])

// // console.log(arr)

// 首先，查看当前目录是否有 a.js
// 把a当作文件夹，并且，把该文件夹当作一个包，看该包中是否有package.json文件，读取main字段。。。。
var a = require("./a");

console.log(a)