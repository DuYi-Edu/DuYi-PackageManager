var a = "没有环境变量";
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === "development"){
    a = "开发环境"
}
else if(process.env.NODE_ENV === "production"){
    a = "生产环境"
}
else if(process.env.NODE_ENV === "test"){
    a = "测试环境"
}
console.log(a)