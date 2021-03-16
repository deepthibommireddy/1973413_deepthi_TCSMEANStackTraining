var sum=[]
var dobj=[]
function saveData()
{
    var budgetObj = {}    
    var sobj={}

    budgetObj.cname = document.getElementById("cname").value;
    budgetObj.pname = document.getElementById("pname").value;
    budgetObj.budget=document.getElementById("budget").value;
    console.log(budgetObj);
    sobj.budget=document.getElementById("budget").value;
    sum.push(budgetObj)
    console.log(sobj)
    sessionStorage.setItem("BudgetInfo",JSON.stringify(sum))

}

function clearData() {
    document.getElementById("cname").value="";
    document.getElementById("pname").value="";
    document.getElementById("budget").value="";
    }

    function retreiveData()
    {
       //for(var i=0;i<sum.length;i++)
        {

    
        
        dobj=JSON.parse(sessionStorage.getItem("BudgetInfo"));
        }
        console.log(dobj)
        var table = document.getElementById("budgetDataList")
        var body = table.getElementsByTagName("tbody")[0];
        for(var i=0;i<dobj.length;i++)
        {
        var newRow = body.insertRow(body.length);  

        
        var cell1 = newRow.insertCell(0);         
         cell1.innerHTML=dobj[i].cname;                 

         var cell2 = newRow.insertCell(1);           
 cell2.innerHTML=dobj[i].pname;    
 var cell3=newRow.insertCell(2);
 cell3.innerHTML=dobj[i].budget;            
    }
  sumOfBudget()
       // document.getElementById("lb1").innerHTML=total
}
    function sumOfBudget()
    {
        var total = 0
        for(var i=0;i<dobj.length;i++){
            total+=Number(dobj[i].budget);
        }
        console.log(total)
         document.getElementById("lb1").innerHTML=total
            
    }