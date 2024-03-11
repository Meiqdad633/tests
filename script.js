/*
یک لامپ با یک دکمه طراحی کنید که که با کلیک کردن روی دکمه لامپ روشن  و خاموش بشه
*/
lamp = document.getElementById("lamp")
lampStatus = false
function change(){
    if(!lampStatus){
        lamp.setAttribute("src", "./on.jpg")
        lampStatus = true
    } else{
        lamp.setAttribute("src", "./off.jpg")
        lampStatus = false
    } 

}

