/*
محصولات یک فروشگاه انلاین را در دیتابس ذخیره کرده و ارایه ای برای سبد خرید کاربر داشته باشید 
و از کاربر اسم محصولی را که قصد اضافه کردن به سبد خرید دارد دریافت کنید
اگر محصول درخواستی کاربر به انبار فروشگاه شما موجود بود آن را به سبد خرید کاربر اضافهکنید
و سپس مبلغ کل سبد خرید را محاسبه کرده و به کاربر نمایش دهید
درغیر این صورت به کاربر پیغام اتمام موجودی نمایش دهید
نکته
بعد از اضافه محصول به سبد خرید سبد را در کنسول نمایش دهید
به طور دیفات 3 محصول با قیمت های مختلف به سلد خرید کاربر موجود باشد

*/
products = [
    {id:0, name: "pen",price:100},
    {id:1, name: "book",price:200},
    {id:2,name: "notebook",price:150},
    {id:3,name: "pencil",price:170}
]

basket =[
    {id:0, name: "pen",price:100}
]

productname = prompt("Please Enter the product name")



stock = products.some(function(product){
    if(product.name == product){
        basket.shift(product)
    }
    return 


}
)

if(stock){
    alert(" کالا موحود میباشد")
    console.log(basket)
}



