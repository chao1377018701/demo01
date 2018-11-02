const app=require('express')()
app.set('view engine','ejs')
app.set('views','ejs_pages')
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'陈康',age:30,hobby:['吃土','吃灰','吃大蒜']})
})
app.listen(3000,()=>{
    console.log('开启服务器成功,请访问:http://127.0.0.1:3000')
})