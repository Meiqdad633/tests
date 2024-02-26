var telegramUsers = [
    {id:1, name: "Fatemeh", age: 25},
    {id:2, name: "Meiqdad", age: 26},
    {id:3, name: "Zahra", age: 30},
    {id:4, name: "Amir", age: 20},
    {id:5, name: "Arman", age: 19},
];
if (telegramUsers.every((item) => {return item.age>18})){
    console.log("میتوانید وارد تماس کنفرانسی شوید");
} else {
    console.log("اجازه ایجاد تماس کنفرانسی را ندارید");
}
