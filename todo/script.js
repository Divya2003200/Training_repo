



document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const deleteTodo=document.getElementById('btn-delete')

  let editMode = false;
  let editElement = null;

  buttonTodo.addEventListener("click", () => {
    const text = inputTodo.value;
    if (editMode) {
      editElement.querySelector(".text-todo").textContent = text;
      editMode = false;
      editElement = null;
      buttonTodo.textContent = "Add";
    } else {
      createTodo(text);
    }
    inputTodo.value = "";
    saveAllTodo();
  });

  const createTodo = (task) => {
    const li = document.createElement("li");
    li.className =
      "list-group-item d-flex justify-content-between align-items-start";
    li.innerHTML = `<span class="text-todo">${task}</span>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-danger">Edit</button>
      <button type="button" class="btn btn-warning">Delete</button>
    </div>`;
    ulTodo.appendChild(li);
  };

  ulTodo.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-warning")) {
      if(confirm("you want to delete the item?"))
    {  e.target.closest(".list-group-item").remove();
      saveAllTodo();
    }
    }

    if (e.target.classList.contains("btn-danger")) {
      const li = e.target.closest(".list-group-item");
      const span = li.querySelector(".text-todo");
  
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.value = span.textContent;
      inputField.className = "form-control";
  
      const saveBtn = document.createElement("button");
      saveBtn.textContent = "Save";
      saveBtn.className = "btn btn-success";
  
      li.replaceChild(inputField, span);
      e.target.replaceWith(saveBtn);
  
      saveBtn.addEventListener("click", () => {
        span.textContent = inputField.value;
        li.replaceChild(span, inputField);
        saveBtn.replaceWith(e.target);
        saveAllTodo();
      });
    }
  });

  deleteTodo.addEventListener('click',function(){

    if(confirm("Do you want to delete all items"))
   { 
    ulTodo.innerHTML='';
    localStorage.clear()
   }
   })

  const saveAllTodo = () => {
    const allTodos = [...document.querySelectorAll(".text-todo")].map(
      (task) => task.textContent
    );

    localStorage.setItem("allTodos", JSON.stringify(allTodos));
  };

  const loadAllTodo = () => {
    const allTodos = JSON.parse(localStorage.getItem("allTodos")) || [];
    allTodos.forEach((task) => createTodo(task));
  };

  loadAllTodo();
}
);


