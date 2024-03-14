
let userName= document.querySelector(".username")
let userpass = document.querySelector(".password")
function lenUser(){
    let user = Number(userName.value.length)
    if(user >= 12){
        document.getElementById("checkuser").innerHTML = "✔️";
    }else{
        document.getElementById("checkuser").innerHTML = "❌";
    }

}
function lenPass(){
    let pass= Number(userpass.value.length)
    if(pass >= 12){
        document.getElementById("checkpass").innerHTML = "✔️";
    }else{
        document.getElementById("checkpass").innerHTML = "❌";
    }

}


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


