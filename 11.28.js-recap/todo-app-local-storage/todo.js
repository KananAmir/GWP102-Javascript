let add = document.querySelector(".add");
let todoInput = document.querySelector("#todo-input");
let todoLists = document.querySelector(".todo-lists");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [];
let editTodoObj;
add.addEventListener("click", function () {
  if (todoInput.value) {
    if (this.innerText === "ADD") {
      let todoObj = {
        todoText: todoInput.value,
        id: Date.now(),
        checked: false,
      };
      allTodos.push(todoObj);

      localStorage.setItem("todos", JSON.stringify(allTodos));

      //   console.log(allTodos);
      drawTodos(allTodos);

      todoInput.style.border = "1px solid #ced4da";
    } else {
      editTodoObj.todoText = todoInput.value;
      localStorage.setItem("todos", JSON.stringify(allTodos));
      drawTodos(allTodos);
      this.innerText = "ADD";
    }
  } else {
    todoInput.style.border = "2px solid red";
  }
  todoInput.value = "";
});

function drawTodos(data) {
  todoLists.innerHTML = "";
  data.forEach((element) => {
    todoLists.innerHTML += `
    <li
    class="list-group-item list-group-item-success mb-3 d-flex justify-content-between align-items-center"
  >
    <div>
      <input type="checkbox" ${
        element.checked && "checked"
      } name="" id="complete" onchange="isChecked(this, ${element.id})"/>
      <span class=${element.checked && "todo-completed"}>${
      element.todoText
    }</span>
    </div>
    <div>
      <button class="btn btn-success" onclick=editTodo(${
        element.id
      })>EDIT</button>
      <button class="btn btn-danger" onclick=deleteTodo(${
        element.id
      })>DELETE</button>
    </div>
  </li>
    `;
  });
}

drawTodos(allTodos);

// function deleteTodo(id) {
//   console.log(id);
//   let i = allTodos.findIndex((item) => item.id == id);
//   allTodos.splice(i, 1);
//   console.log(i);
//   console.log(allTodos);
// }

function deleteTodo(id) {
  allTodos = allTodos.filter((item) => item.id != id);
  localStorage.setItem("todos", JSON.stringify(allTodos));
  drawTodos(allTodos);
}
function editTodo(id) {
  editTodoObj = allTodos.find((item) => item.id == id);
  todoInput.value = editTodoObj.todoText;
  todoInput.focus();

  add.innerText = "EDIT";
}

function isChecked(input, id) {
  //   console.log(input);
  if (allTodos.find((item) => item.id == id).checked === true) {
    allTodos.find((item) => item.id == id).checked = false;
  } else {
    allTodos.find((item) => item.id == id).checked = true;
  }
  localStorage.setItem("todos", JSON.stringify(allTodos));
  drawTodos(allTodos);
}
