const app=require('express')()
app.engine('html',require('express-art-template'))
app.set('view engine','html')
app.set('views','./art_page')
app.get('/',(req,res)=>{
    res.render('index.html',{
        name:'朱程',
        age:'88',
        hobby:['妖姬','女警','小法师','大德玛']
    })
})
app.listen(3000,()=>{
    console.log('开启服务器成功,请访问:http://127.0.0.1:3000')
})