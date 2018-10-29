// const fs=require('fs')
// fs.readFile('./node/day01/file/1.txt','utf-8',(err,data) => {
//     if (err) return console.log('错误信息:'+err.message)
//     console.log(data)
// })
//如果是相对路径,name执行时会参考当前执行环境的路径


//全局成员  __dirname
// console.log(__dirname);
const fs=require('fs')
fs.readFile(__dirname+'/file/1.txt','utf-8',(err,data) => {
    if (err) return console.log('错误信息:'+err.message)
    console.log(data)
})
//拼接时不要再加.了