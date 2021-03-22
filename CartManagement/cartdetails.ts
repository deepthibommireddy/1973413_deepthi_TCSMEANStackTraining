class productDetails{
    id: number
    itemprice:number
    itemtitle:string
    itemPic:string

    constructor(){
        this.id = 0
        this.itemPic = "",
        this.itemprice = 0,
        this.itemtitle = ""
    }
}


const productDetailsArr: productDetails[] = [
    {id: 1,itemprice:799.99,itemtitle:"Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone",itemPic:"S21.jpg"},
    {id:2,itemprice:899.99,itemtitle:"2020 Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Gold",itemPic:"MacBook.jpg"} ,
    
    {id:3,itemprice:199.99,itemtitle:"Apple AirPods (2nd Gen) with Wireless Charging Case",itemPic:"airpods.jpg"},
    {id:4,itemprice:498.00,itemtitle:"SAMSUNG 58 Class 4K Crystal UHD (2160P) LED Smart TV with HDR ",itemPic:"samsung.jpeg"} ,
    {id:5,itemprice:699.99,itemtitle:"iphone11",itemPic:"iphone11.jpg"},
    {id:6,itemprice:1099.99,itemtitle:"LG - 4.5 Cu. Ft. 12-Cycle Front-Loading Smart Wi-Fi Washer",itemPic:"washing.jpg"},
    {id:7,itemprice:9999.99,itemtitle:"KitchenAid 42 Inch Wide 24.2 Cu. Ft. Energy Star Rated Built-In French Door Refrigerator ",itemPic:"fridge.jpg"}

];

var cartItems: Array<productDetails> = []

function additems(){
    var cartItemCount = 0
    if(JSON.parse(sessionStorage.getItem("cartInfoCached")!) !== null){
        cartItemCount = JSON.parse(sessionStorage.getItem("cartInfoCached")!).length
    }
    document.getElementById("cartValue")!.innerHTML = cartItemCount.toString()
    

    console.log(productDetailsArr)

    const displayDiv  = document.getElementById("main")

    for(var i=0;i<productDetailsArr.length;i++){

        let newMainDiv  =document.createElement("div")
        let newCardDiv = document.createElement("div")
        let newTitle : HTMLElement = document.createElement("h4")
        let newDesc : HTMLElement = document.createElement("p")
        let newImage : HTMLImageElement= document.createElement("img")
        let addButton=document.createElement("button")
        addButton.innerHTML = "Add"

        newTitle.innerHTML = String(productDetailsArr[i].itemprice)

        newDesc.innerHTML = productDetailsArr[i].itemtitle
        newImage.src = productDetailsArr[i].itemPic

        newMainDiv.classList.add('card','bg-light')
        newMainDiv.style.width = "25%"
        newCardDiv.className = "card-body"
        newDesc.className = "card-title"
        newTitle.className ="card-text"
        newImage.className = "card-img-bottom"
        newImage.style.width = "100%"
        addButton.className="btn btn-primary"

        
        addButton.setAttribute("id", productDetailsArr[i].id.toString())



        newCardDiv.appendChild(newDesc)
        newCardDiv.appendChild(newTitle)
        newMainDiv.appendChild(newCardDiv)
        newMainDiv.appendChild(newImage)
        newMainDiv.appendChild(addButton)
        displayDiv?.appendChild(newMainDiv);

        (function (_td: HTMLElement) {
            addButton.addEventListener('click', function(){
                onAddCartButton(_td.id)
                
                
            });
        })(addButton);
    }
                
    function onAddCartButton(id:String){
        for(let i =0;i< productDetailsArr.length; i++){
            if(Number(id) === productDetailsArr[i].id){
                cartItemCount += 1
                console.log( "Price -->  "+ productDetailsArr[i].itemprice + "   item -->"+ productDetailsArr[i].itemtitle)
                cartItems.push(productDetailsArr[i])
            }
        }

        sessionStorage.setItem("cartInfoCached",JSON.stringify(cartItems))
        document.getElementById("cartValue")!.innerHTML = cartItemCount.toString()
        console.log( sessionStorage.getItem("cartInfoCached")!.length)
        
    }


};

function checkout(){
   let  dobj=JSON.parse(sessionStorage.getItem("cartInfoCached")!)

        
        console.log(dobj)
        var table:HTMLElement|null = document.getElementById("cartList")
        
       var body= table!.getElementsByTagName("tbody")[0];
        for(var i=0;i<dobj.length;i++)
        {
        var newRow: HTMLTableRowElement | undefined = body?.insertRow((<any>body).length);  

        
        let cell1 = newRow.insertCell(0);         
         cell1.innerHTML=dobj[i].itemtitle;                 

         let cell2 = newRow.insertCell(1);           
         cell2.innerHTML=dobj[i].itemprice;    
    }
    let total = 0
    for(let i=0;i<dobj.length;i++){
        total+=Number(dobj[i].itemprice);
    }
    console.log(total)
     document.getElementById("lb1")!.innerHTML=total.toString()
  
}
    



