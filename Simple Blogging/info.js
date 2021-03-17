var arr=[]
var dobj=[]

function addBlog(){
    var blogObj={}
    blogObj.title = document.getElementById("title").value;
    blogObj.desc = document.getElementById("desc").value;
    blogObj.imageInfo=document.getElementById("imageId").files[0].name;
    arr.push(blogObj)
    localStorage.setItem("BlogInfo",JSON.stringify(arr))
       
    
    renderData() 
}


// function renderData(){
//     console.log(dobj)
//     var displayDiv=document.getElementById("main")
//     displayDiv.innerHTML=""
//     for(var i=0;i<dobj.length;i++){

//         var newMainDiv=document.createElement("div")
//         var newTitle = document.createElement("div")
//         var newDesc = document.createElement("div")
//         var newImage = document.createElement("img")

//         newTitle.innerHTML = dobj[i].title
//         newDesc.innerHTML = dobj[i].desc
//         newImage.src = dobj[i].imageInfo
        
//         console.log( newTitle.innerHTML)
//         newMainDiv.class="grid-child"
 
 

//         newMainDiv.appendChild(newTitle)
//         newMainDiv.appendChild(newDesc)
//         newMainDiv.appendChild(newImage)
//         displayDiv.appendChild(newMainDiv)
        
                 

//     }
// }



function renderData(){
    
    dobj=JSON.parse(localStorage.getItem("BlogInfo"));
    console.log(dobj)
    var displayDiv=document.getElementById("main")
    displayDiv.innerHTML=""
    for(var i=0;i<dobj.length;i++){

        var newMainDiv=document.createElement("div")
        var newCardDiv=document.createElement("div")
        var newTitle = document.createElement("h4")
        var newDesc = document.createElement("p")
        var newImage = document.createElement("img")

        newTitle.innerHTML = dobj[i].title
        newDesc.innerHTML = dobj[i].desc
        newImage.src = dobj[i].imageInfo
        
        console.log( newTitle.innerHTML)
        newMainDiv.classList.add('card','bg-light')
        newMainDiv.style.width = "20%"
        newCardDiv.class = "card-body"
        newTitle.class = "card-title"
        newDesc.class ="card-text"
        newImage.class = "card-img-bottom"
        newImage.style.width = "100%"
 
 

        newCardDiv.appendChild(newTitle)
        newCardDiv.appendChild(newDesc)
        newMainDiv.appendChild(newCardDiv)
        newMainDiv.appendChild(newImage)
        displayDiv.appendChild(newMainDiv)
        
                 

    }
}
