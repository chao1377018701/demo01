const fs=require('fs')
fs.appendFile(__dirname+'/file/2.txt','\n333',err => {
    if(err) return console.log('错误信息:'+err.message)
})
//    /n换行