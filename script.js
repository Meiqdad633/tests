

function randomly(){
    return(Math.floor(Math.random() *255))
}


let background = document.getElementById("main")
let heading1 = document.getElementById('headung1')
heading1.addEventListener('click', setInterval(()=>{
    background.style.backgroundColor = 'rgba('
    + randomly() + ',' + randomly()
    + ',' + randomly() + '\)'

}, 5000))


