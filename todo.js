
  //  let arrayOfTodos = [
  //   {
  //   "userId": 14,
  //   "id": 1,
  //   "title": "delectus aut autem",
  //   "completed": false
  // },
  // {
  //   "userId": 20,
  //   "id": 2,
  //   "title": " second delectus aut autem",
  //   "completed": false
  // }]
  const saveUserId = (num) => {
    todoId = parseInt(num);
    
  }

  
const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }
  // begin populate to-dos function
  const populateTodos = () => {

    let todoList = document.getElementById('todo-list');
    let todoTitle = "";
  

    for (i=0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);

        let todoItem = document.createElement("LI");  

        if (arrayOfTodos[i].completed) {

            todoItem.classList.add("isTrue");
        } else {
            todoItem.classList.add("isFalse")
        }

    todoItem.appendChild(todoTitle);
    
    todoList.appendChild(todoItem);
    }        
    // console.log(arrayOfTodos[100].title) // => 14
    // console.log(arrayOfTodos[150].title) // => 20
  }
// end populate todos function



 const repopulateWids = () => {
   const items = document.getElementsByTagName("ol");
   for (i=0; i < items.length; i++) {
     items[i].innerHTML = null; 
        }  

      console.log(todoId);

      // create a lI if the user id = todoId 

      let todoList = document.getElementById('todo-list');
      let todoTitle = "";
      const currentuseridlist = arrayOfTodos.filter(a => a.userId == todoId);

      console.log(currentuseridlist);

      for (i=0; i < currentuseridlist.length; i++) {

        todoTitle = document.createTextNode(currentuseridlist[i].title);

        let todoItem = document.createElement("LI");

      //   const currentuseridlist = arrayOfTodos.filter(a => a.userId == todoId);

      //   console.log(currentuseridlist);

        todoItem.appendChild(todoTitle);
    
        todoList.appendChild(todoItem);
        }
        console.log("I can't figure out the syntax for returning the list of objects with the user ID matching the input");     
        alert("I FIGURED IT OUT!");
  } 
  
   

const showComplete = () => {
  const items = document.getElementsByTagName("ol");
  for (i=0; i < items.length; i++) {
    items[i].innerHTML = null; 
       }   
       console.log("what");
      
  // console.log("what")
      let todoList = document.getElementById('todo-list');
      let todoTitle = "";
      const completedTrue = arrayOfTodos.filter(a => a.completed == true);

      console.log(completedTrue);

      for (i=0; i < completedTrue.length; i++) {

        todoTitle = document.createTextNode(completedTrue[i].title);

        let todoItem = document.createElement("LI");

      //   const currentuseridlist = arrayOfTodos.filter(a => a.userId == todoId);

      //   console.log(currentuseridlist);

        todoItem.appendChild(todoTitle);
    
        todoList.appendChild(todoItem);
        }

}
const showIncomplete = () => {
  const items = document.getElementsByTagName("ol");
  for (i=0; i < items.length; i++) {
    items[i].innerHTML = null; 
       }   
       console.log("what");
      
  // console.log("what")
      let todoList = document.getElementById('todo-list');
      let todoTitle = "";
      const completedFalse = arrayOfTodos.filter(a => a.completed == false);

      console.log(completedFalse);

      for (i=0; i < completedFalse.length; i++) {

        todoTitle = document.createTextNode(completedFalse[i].title);

        let todoItem = document.createElement("LI");

      //   const currentuseridlist = arrayOfTodos.filter(a => a.userId == todoId);

      //   console.log(currentuseridlist);

        todoItem.appendChild(todoTitle);
    
        todoList.appendChild(todoItem);
        }

}