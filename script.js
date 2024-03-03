tasks = {
    ali:["download", "upload", "copy", "cut"],
    ahmad:["download", "modify", "read", "cut"],
    fatemeh:["download", "edit", "reset", "cut"],
    meiqdad:["download", "upload", "config", "cut"] 
}

task = prompt("write the task name"), employeer = prompt("assign to")
employeer in tasks? tasks[employeer].push(task): alert("wrong input");
console.log(tasks)
