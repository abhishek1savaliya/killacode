import * as fs from 'fs'; 


export default async function handler(req, res) {
  let data =  await fs.promises.readdir("blogdata")
  data = data.slice(0, parseInt(req.query.count))
  let allBlogs = [];
  let myfile;
  for(let index=0;index<data.length;index++){
    const item = data[index];
     myfile = await fs.promises.readFile(('Blogdata/'+item),'utf-8')
     allBlogs.push(JSON.parse(myfile)); 
  }
  
  res.status(200).json(allBlogs)



  // fs.promises.readdir("blogdata",'utf-8',(err,data)=>{
  // console.log(data)
  // let allBlogs = [];
  // data.forEach((item)=>{
  // console.log(item)
  // fs.readFile(('Blogdata/'+item),'utf-8',(err,data)=>{
  //   allBlogs.push(data)
  // })
  // })
  //   res.status(200).json(allBlogs)
  // })
  
}