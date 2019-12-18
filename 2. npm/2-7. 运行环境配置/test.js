//读取package.json文件中的版本号

var config = require("./package.json")
console.log(config.version)
console.log(config.a)