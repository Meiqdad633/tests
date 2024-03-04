/*
یک پروژه ماشین حساب پیاده سازی کنید
به این ص ورت که 2 عدد را  با همراه عملیات (ضرب و تقسیم....) از کاربر دریافت کرده و عملیات دلخواه کاربر را از روی اعداد ورودی اعمال کند و حال رو نمایش دهد
*/
num1 = parseInt(prompt("Num1: ")) , num2 = parseInt(prompt("Num2: "));
op = prompt("Operation ");

(op === "+") ? document.write(num1 + num2) :
(op === "-") ? document.write(num1 - num2) :
(op === "*") ? document.write(num1 * num2) :
(op === "/") ? document.write(num1 / num2) :
document.write("Invalid operation");
