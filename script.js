/*
فرض کنید در سامانه ای راه اندازی کرده اید، کاربری پسوردش رو فراموش کرده و شما از کاربر یوزرنیم رو  میگیرین و پسورد رو بهش نمایش میدین
اگر کاربر با یوزرنیم وارد شده در دیتابیش شما وجود نداشته باشد به کاربر پیغام متناسب را نمایش دهید
*/
input = prompt("Username to reset password")
users = [
  {id:0, name: "ahmad", pass:"123"},
  {id:1, name: "fatemeh", pass:"mylove"},
  {id:2, name: "meiqdad", pass:"321"},
]

user = users.find((u)=>{return u.name == input})
user?document.write(user.pass):alert('user not found')