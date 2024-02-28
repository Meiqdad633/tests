/*
کلمه ای را از کاربر دریافت کرده و چک کنید که کلمه وارد شده از هردو سمت چپ و راست به یک صورت خوانده میشود
*/

input = prompt("Enter the Palindrome Word")
if(palindrome = input.split("").reverse().join('') == input){
    document.write("the Palindrome Word is:  ",input)
} else{
    alert("Sorry, Wrong word")
}


