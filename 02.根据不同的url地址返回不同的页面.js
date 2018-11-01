const http=require('http')
const path=require('path')
const fs=require('fs')
const server=http.createServer()
server.on('request',(req,res)=>{
    let url=req.url
    if(url==='/') url='/views/index.html'
    fs.readFile(path.join(__dirname,url),(err,buf)=>{
        if(err) res.end('404. NOT FOUND')
        // console.log(url)
        res.end(buf)
    })
})
server.listen(3000,()=>{
    console.log('开启服务器成功,请访问:http://127.0.0.1:3000')
})
