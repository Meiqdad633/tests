/* اعدادی به تعداد دلخواه از کاربر گرفته و آن را داخل ارایه ذخیره کند
و سپس میانگین آنها را محاسبه کرده و نمایش دهد
*/

users=[]
for(i= 0; i < 3; i++){
    username = prompt("Enter your name")
    while(username.length < 3 || username.length > 15 ){
        username= prompt("Enter your name")
    }

    userfamily = prompt("Enter your lastname")
    while(userfamily.length < 3 || userfamily.length > 15){
        userfamily=  prompt("Enter your lastname")
    }
    
    userage = prompt("Enter your age")
    while(isNaN(userage) || c.length > 3){
        userage=  prompt("Enter your age")
    }

    var user = {
        name: username,
        lastname: userfamily,
        age : userage
    }
    users.push(user)

}
console.log(users)