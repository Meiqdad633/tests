
todolist = [
    {id:0, name: "reading", done:false},
    {id:1, name: "writing", done:true},
    {id:2, name: "speaking", done:false},
    {id:3, name: "listining", done:true}
]
new_item = {id:todolist.length , name: null, status: false}

input = prompt("select \n 1-to add \n 2-for delete \n 3- change status ")
if(input == 1){
    input =prompt("Enter the todo name: ")
    check = todolist.some((item)=>{return item.name == input})?alert("item exist"):new_item.name = input, todolist.push(new_item)
    console.log(todolist)
    
} else if(input == 2){
    input = (prompt("Enter the name to delete: "))
    remove = todolist.findIndex((item)=>{ return item.name == todolist.name})
    todolist.splice(remove, 1)
    console.log(todolist)
} else if(input == 3){
    todolist.forEach(element => { element.status?alert("Done"):element.status = true 
    });
    console.log(todolist)
} else{
    alert("wrong input")
}
