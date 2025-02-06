document.addEventListener("DOMContentLoaded", () => {
  const inputTodo = document.getElementById("input-todo");
  const buttonTodo = document.getElementById("button-todo");
  const ulTodo = document.getElementById("ul-todo");
  const deleteTodo = document.getElementById("btn-delete");

  const API_URL = "https://jsonplaceholder.typicode.com/todos";

  async function loadTodos() {
    try {
      const res = await axios.get(`${API_URL}?_limit=7`);
      const todos = res.data;
      todos.forEach(todo => addTodoToUI(todo.id, todo.title));
      console.log(todos);
    } catch (error) {
      console.error("Error loading todos:", error);
      alert("Failed to load todos. Please try again.");
    }
  }

  function addTodoToUI(id, task) {
    ulTodo.innerHTML += `
      <li class="list-group-item" data-id="${id}">
        <span class="text-todo">${task}</span>
        <button class="btn btn-danger">Edit</button>
        <button class="btn btn-warning">Delete</button>
      </li>`;
  }

  buttonTodo.addEventListener("click", async () => {
    const text = inputTodo.value;
    if (!text) return;

    try {
      const res = await axios.post(API_URL, { title: text });
      const newTodo = res.data;
      console.log(newTodo);
      addTodoToUI(newTodo.id, newTodo.title);
      inputTodo.value = "";
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Failed to add todo. Please try again.");
    }
  });

  ulTodo.addEventListener("click", async (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = li.dataset.id;

    if (e.target.classList.contains("btn-warning")) {
      if (!confirm("Delete this item?")) return;

      try {
        console.log("Going to be deleted");
        await axios.delete(`${API_URL}/${id}`);
        li.remove();
      } catch (error) {
        console.error("Error deleting todo:", error);
        alert("Failed to delete todo. Please try again.");
      }
    }

    if (e.target.classList.contains("btn-danger")) {
      const span = li.querySelector(".text-todo");
      const newText = prompt("Edit Todo:", span.textContent);
      if (!newText) return;

      try {
        await axios.put(`${API_URL}/${id}`, { title: newText });
        span.textContent = newText;
      } catch (error) {
        console.error("Error updating todo:", error);
        alert("Failed to update todo. Please try again.");
      }
    }
  });

  deleteTodo.addEventListener("click", async () => {
    if (!confirm("Delete all items?")) return;

    const allTodos = document.querySelectorAll(".list-group-item");

    try {
      for (const li of allTodos) {
        const id = li.dataset.id;
        await axios.delete(`${API_URL}/${id}`);
      }
      ulTodo.innerHTML = "";
    } catch (error) {
      console.error("Error deleting all todos:", error);
      alert("Failed to delete all todos. Please try again.");
    }
  });

  loadTodos();
});
