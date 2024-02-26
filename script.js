var product = [
    {id:1, name: "Notebook", price: 50000},
    {id:2, name: "Pencil", price: 20000},
    {id:3, name: "Eraser", price: 10000},
    {id:4, name: "Laptop", price: 35000000},
    {id:5, name: "Phone", price: 10000000},
    {id:6, name: "EarPod", price: 2000000},
];
var cart = [
    {id:1, name: "Eraser", price: 10000},
    {id:2, name: "Notebook", price: 50000},
];
var productName = prompt("Enter a product you want:");
var requestProduct;

var result = product.some((item) => { if(item.name == productName){
    requestProduct = item;
    return true;}});

if (result == true){
    var newProduct = {
        id: 3,
        name: requestProduct.name,
        price: requestProduct.price,
    }
    cart.push(newProduct);
    var sum = 0
    cart.forEach((item) => {
        sum += item.price;
    })
    console.log(cart);
    alert("Totalprice:" +sum);
} else {
    console.log("موجودی تمام شده");
}
