/*
یک تایمر پیاده سازی کنید
به طوری که از کاربر میزان  ثانیه و دقیقه را دریافت کردهو تایمری را با اطلاعات وارد شده استارت بزنید
و زمانی که تایمر تمام شد پیغام مناسبی رانمایش دهید
*/
seconds  = parseInt(prompt("timer seconds: ")), minute = parseInt(prompt("timer minutes: "))

totalSeconds = minute * 60

console.log(totalSeconds) 
setInterval(()=>{
  totalSeconds--
  document.write(totalSeconds, "<br>")
  totalSeconds === 0? (clearInterval(totalSeconds),alert("finished")):""
}, seconds * 1000)