var todoList = [];

do{
    var input = prompt("Enter a command");
    if(input === "list"){
        listTodos();
    }
    else if(input === "new")
        todoList.push(prompt("Enter a new todo"));
    else if(input === "delete"){
        var index = Number(prompt("Enter index to remove"));
        console.log("Deleted " + todoList[index]);
        todoList.splice(index, 1);
    }
}while(input != "quit");

function listTodos(){
    console.log("**********");
        todoList.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("**********");
}