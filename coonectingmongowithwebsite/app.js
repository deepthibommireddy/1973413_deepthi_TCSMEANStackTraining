let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017"
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/home.html");
})

app.get("/addCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/addCourse.html");
})
app.get("/deleteCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/deleteCourse.html");
})
app.get("/fetchCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/fetchCourse.html");
})
app.get("/updateCourse.html",(req,res)=>{
    res.sendFile(__dirname+"/updateCourse.html");
})
app.post("/storeDetails",(req,res)=> {
    

    let id = req.body.id;
        let name = req.body.name;
        let desc=req.body.desc
        let amount=req.body.amount
        
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
            let db = client.db("meanstack");
    db.collection("Courses").insertOne({_id:id,CourseName:name,Description:desc,amount:amount},(err2,result)=>{
            if(!err2){
                console.log(result.insertedCount);
            }else {
                console.log(err2.message);
            }
            client.close();    
        });
        
    }
});
res.sendFile(__dirname+"/home.html")
        
})
app.post("/updateDetails",(req,res)=> {
    

        let id = req.body.id;
        let amount=req.body.amount
      
mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
if(!err1){
            let db = client.db("meanstack");
    db.collection("Courses").updateOne({_id:id},{$set:{amount:amount}},(err2,result)=>{
        if(!err2){
            // console.log(result);
            if(result.modifiedCount>0){
                 console.log("Record updated successfully")
            }else {
                 console.log("Record didn't update");
            }
     }
            client.close();    
        });
        
    }
});
res.sendFile(__dirname+"/home.html")
        
})

app.post("/deleteDetails",(req,res)=> {
    

    let id = req.body.id;
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
        if(!err1){
            let db = client.db("meanstack");
            db.collection("Courses").deleteOne({_id:id},(err2,result)=> {
                if(!err2){
                       if(result.deletedCount>0){
                            console.log("Record deleted successfully")
                       }else {
                            console.log("Record not present")
                       }
    
                }
                client.close();
            })           
        }
    })
    res.sendFile(__dirname+"/home.html")
})



app.get("/fetchDetails",(req,res)=> {
    res.setHeader("content-type","text/html"); 
    var tinfo=  `<h1>List of Courses</h1>
            <table border="1">
            <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Amount</th>`
            

    
    var obj1=[]
    mongoClient.connect(url,{ useUnifiedTopology: true },(err1,client)=> {
      if(!err1){
       let db = client.db("meanstack");
      let cursor = db.collection("Courses").find().toArray(function(err, result) {
        if (err) throw err;
        console.log("result.....");
          console.log(result.length)
          for(let i=0;i<result.length;i++){
           obj1[i]=result[i]
          }
          console.log(obj1)
          for(let i=0;i<obj1.length;i++){
            tinfo+=`<tr>
                      <td>${obj1[i]._id}</td>
                      <td>${obj1[i].CourseName} 
                      </td>
                      <td>${obj1[i].Description}</td>
                      <td>${obj1[i].amount}</td>
                      </tr>`
        }
        tinfo+=`</table>`
        console.log(tinfo)
          //obj.push(result)
           //obj1 = [].concat(result)
          res.send(tinfo)
      });
      
     
    

}
//res.json(obj)
}) 


           
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@") 
console.log(obj1) 


      //res.send(tinfo)
      //console.log(obj)
      console.log(tinfo)
       
})


app.listen(9090,()=>console.log("running.."));