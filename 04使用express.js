const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    res.send('你好啊!')
})
app.listen(3000,()=>{
    console.log('开启服务器成功,请访问:http://127.0.0.1:3000')
})