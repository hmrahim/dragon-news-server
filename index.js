const express = require("express")
const port = process.env.PORT || 5000
const app = express()
const cors = require("cors")
const categorys = require("./datas/categories.json")
const news = require("./datas/news.json")

app.use(cors())



app.get("/",(req,res)=> {
    res.send("hello nodejs")
})

app.get("/categorys",(req,res)=> {
    res.send(categorys)

})
app.get("/news",(req,res)=> {
    res.send(news)
})

app.get("/singlenews/:id",(req,res)=> {
    const id = req.params.id
    const singleNews = news.find(n=> n._id === id)
    
    res.send(singleNews)
   
})

app.get("/category/:id",(req,res)=> {
    const id = parseInt(req.params.id)
    if(id === 0){
        res.send(news)
    }else{
        const categoryNews = news.filter(n=>parseInt(n.category_id)  === id)
        res.send(categoryNews)
    }
})


app.listen(port,()=> {
    console.log("port is runnig on port 5000");
})


