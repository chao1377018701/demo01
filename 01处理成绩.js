const fs=require('fs')
fs.readFile(__dirname+'/成绩.txt','utf-8',(err,dataStr)=>{
    if(err) return console.log('错误信息:'+err.message)
    // console.log(dataStr)
    let arr=dataStr.split(' ');
    // console.log(arr)
    let newArr=[]
    arr.forEach(item=>{
        if(item.length>0){
            let newStr=item.replace('=',':')
            newArr.push(newStr);
        } 
    })
    // console.log(newArr)

    
    // console.log(newArr.join('\n'))

    fs.writeFile(__dirname+'/成绩OK.txt',newArr.join('\n'),err=>{
        if (err) return console.log('错误信息:'+err.message)
        console.log('导出成绩成功')
    })
})