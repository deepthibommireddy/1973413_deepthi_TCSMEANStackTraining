let obj=require("readline-sync")
let fs = require("fs");
let empObj = new Array();
let fname=obj.question("enter fist name :")

let lname=obj.question("enter last name:")

let gender=obj.question("enter gender :")

let email=obj.question("enter email :")
var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(date)

var emp1 = {"fname":fname,"lname":lname,"gender":gender,"email":email,"date":date,"time":time}

fs.readFile('emplog.json',function(err,data){
    var obj=JSON.parse(data)
    obj.push(emp1)
    debugger;

var empString = JSON.stringify(obj);

fs.writeFile("emplog.json",empString,(err)=> {
    if(!err){
        console.log("Record stored successfully...")
    }
})
debugger;
})
module.exports.fname=fname
module.exports.lname=fname
module.exports.age=fname
module.exports.email=fname
module.exports.emp=emp1
