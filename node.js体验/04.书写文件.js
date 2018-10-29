const fs=require('fs')
fs.writeFile(__dirname+'/file/2.txt','233',(err) => {
    if (err) return console.log('错误信息:'+err.message)

})
//没有的话会创建一个