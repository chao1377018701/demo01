const http=require('http')
const template=require('art-template')
const path=require('path')
const server=http.createServer()
server.on('request',(req,res)=>{
    const url=req.url
    if(url==='/') {
        const htmlStr=template(path.join(__dirname,'/views/template.html'),{
            name:'zs',
            age:18,
            hobby:['吃饭','睡觉','打豆豆']
        })
        res.end(htmlStr)
    }
})
server.listen(3000,()=>{
    console.log('开启服务器成功,请访问:http://127.0.0.1:3000')

})
