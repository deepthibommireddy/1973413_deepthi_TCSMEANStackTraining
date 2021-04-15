let mongoClient = require("mongodb").MongoClient;
let fs=require("fs")
let url = "mongodb://localhost:27017"
let callData=fs.readFileSync('call_data.json')
let callrecordData=JSON.parse(callData)

mongoClient.connect(url, {useUnifiedTopology: true },(err1,client)=>{
    if(!err1){
                let db = client.db("meanstack");
        db.collection("callRecord").insertMany(callrecordData,(err2,result)=>{
                if(!err2){
                    console.log(result.insertedCount);
                }else {
                    console.log(err2.message);
                }
                client.close();    
            });
            
        }
    });