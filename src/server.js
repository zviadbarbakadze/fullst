import express from "express";


const app = express();
app.use(express.json());
let articlesInfo=[
  {
    name:"learn-react",
    upvotes:0
  },
  {
    name:"learn-node",
    upvotes:0
  },
  {
    name:"mongodb",
    upvotes:0
  }
]
app.put('/api/articles/:name/upvote',(req,res)=>{
  const{name}=req.params
  const article=articlesInfo.find(article=>article.name===name)
  if(article){
   article.upvotes=article.upvotes+1
   res.send(` upvotes is ${article.upvotes}`)
  }else{
    res.send('article doesn\'t exist')
  }
  
})

app.listen(8000, () => {
  console.log("server is listening ");
});
