/*
یک تایمر پیاده سازی کنید
به طوری که از کاربر میزان  ثانیه و دقیقه را دریافت کردهو تایمری را با اطلاعات وارد شده استارت بزنید
و زمانی که تایمر تمام شد پیغام مناسبی رانمایش دهید
*/
seconds  = parseInt(prompt("timer seconds: ")), minute = parseInt(prompt("timer minutes: "))

totalSeconds =  (minute * 60) + seconds

console.log(totalSeconds) 
setInterval(()=>{
  document.write(totalSeconds)
  totalSeconds--
  totalSeconds === 0? clearInterval:"finish"
})