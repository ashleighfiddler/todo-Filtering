
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
    let todoComplete = "";

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

      for (i=0; i < arrayOfTodos.length; i++) {

        todoTitle = document.createTextNode(arrayOfTodos[i].title);

        let todoItem = document.createElement("LI");

        const result = arrayOfTodos.filter( ) 

        console.log(result)

        


    todoItem.appendChild(todoTitle);
    
    todoList.appendChild(todoItem);
         
   } 
  }
