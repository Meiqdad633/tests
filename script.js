/*
یک فروشگاه انلاین رو پیاده سازی کنید که یک سبد خرید با 6 محصول داشته باشد
محصولاتی که بالای 100 تومان باشد هزینه پست دریافت نشود و اما محصولات که زیر 100 تومان قیمت دارند هر کدام 10 تومان هزینه پست دریافت شود
و در اخر قیمت کل سبد خرید با هزینه پست محاسبه شود

*/

basket = [
    {id:0, name: "pen",price:100},
    {id:1, name: "book",price:200},
    {id:2,name: "notebook",price:80},
    {id:3,name: "pencil",price:60},
    {id:4,name: "bill",price:110},
    {id:5,name: "mobile",price:30}
    ]

sum = 0
postpayment  = basket.filter((item)=>{
    if (item.price < 100){
        document.write(`product with 10$ shiping:  ${item.name} ${"<br>"}`)
        item.price += 10
    }
    document.write(`product without shiping:  ${item.name} ${"<br>"}`)
    sum+=item.price

})

document.write("the Total apyment with shiping is: ", sum)