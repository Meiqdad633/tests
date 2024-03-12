/*
یک لامپ با یک دکمه طراحی کنید که که با کلیک کردن روی دکمه لامپ روشن  و خاموش بشه
*/
let userName= document.querySelector(".username")
let userpass = document.querySelector(".password")

function validation(){
    let user = Number(userName.value.length)
    let pass= Number(userpass.value.length)
    if(user >= 12 && pass >= 8){
        alert("ok")
    }
    else{
        alert("Login failed")
    }
}