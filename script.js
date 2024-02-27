/*
محصولات فرروشگاهی را در داخل ارایه ذخیره کرده و یک ارایه برای سبد خرید در نظر بگیرید 
 و داخل سبد خرید 3 محصول دیفالت قرار دهید
از کاربر ورودی بگیرید اگر وردی عدد یک بود حدف محصول اگر 2 اضافه کردن محصول به سبد خرید انجام شود
*/
products = [
    {id:0, name: "pen",price:100},
    {id:1, name: "book",price:200},
    {id:2,name: "notebook",price:150},
    {id:3,name: "pencil",price:170},
    {id:4,name: "bill",price:400},
    {id:5,name: "mobile",price:370}

]

basket =[
    {id:0, name: "pen",price:100},
    {id:1,name: "bill",price:400},
    {id:2,name: "mobile",price:370}
]

input = Number(prompt("1- for add \n2- for delete"))

if(Number(input === 1)){
    productname = prompt("Enter productname to add")
    addproduct = products.some((product)=>{
        if(product.name == productname){
            basket.push(product)
            return true
            }})
    if(addproduct){
        alert("محصول به سبد خرید اضافه شد ")
        basket.forEach(element => {
            document.write(`${element.id+1}: ${element.name} \n`)
        });}
    else{
            alert("کالا موجود نمی باشد")
        }
    }

else if (input === 2){
     productname = prompt("Enter productname to delete")
     productindex = basket.findIndex((product)=>{
         return product.name == productname
     })
     if(productindex == -1){
        alert("کالا موجود نمی باشد")
     }
     else{
        basket.splice(productindex, 1)
     }
    }
else{
    alert("wrong input")
}
