import * as fs from 'fs'; 
//http://localhost:3000/api/getblog?slug=how-to-learn-nextjs.json

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}`,'utf-8',(err,data)=>{
    if(err){
        res.status(500).json({error:"No such blog found"})
    }
    console.log(req.query)
    res.status(200).json(JSON.parse(data))
  })
  
}