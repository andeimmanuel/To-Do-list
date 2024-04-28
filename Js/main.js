window.addEventListener("load", () => {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  const form = document.querySelector("#new-task");
  const input = document.querySelector("#task-input");
  const list_el = document.querySelector("#task");

  // Function to render tasks from local storage
  const renderTasks = () => {
    list_el.innerHTML = ""; // Clear existing tasks
    todos.forEach((todo) => {
      const task_el = document.createElement("div");
      task_el.classList.add("task");

      const task_content_el = document.createElement("div");
      task_content_el.classList.add("content");

      const task_input_el = document.createElement("input");
      task_input_el.type = "text";
      task_input_el.classList.add("text");
      task_input_el.value = todo.content;
      task_input_el.setAttribute("readonly", "readonly");

      task_content_el.appendChild(task_input_el);

      const task_action_el = document.createElement("div");
      task_action_el.classList.add("actions");

      const task_edit_el = document.createElement("button");
      task_edit_el.innerText = "Edit";
      task_edit_el.classList.add("edit");

      const task_delete_el = document.createElement("button");
      task_delete_el.innerText = "Delete";
      task_delete_el.classList.add("delete");

      task_action_el.appendChild(task_edit_el);
      task_action_el.appendChild(task_delete_el);

      task_el.appendChild(task_content_el);
      task_el.appendChild(task_action_el);

      list_el.appendChild(task_el);

      // Edit button functionality
      task_edit_el.addEventListener("click", () => {
        if (task_edit_el.innerText.toLowerCase() === "edit") {
          task_input_el.removeAttribute("readonly");
          task_input_el.focus();
          task_edit_el.innerText = "Save";
        } else {
          task_input_el.setAttribute("readonly", "readonly");
          task_edit_el.innerText = "Edit";
          // Update todo content
          todo.content = task_input_el.value;
          localStorage.setItem("todos", JSON.stringify(todos));
        }
      });

      // Delete button functionality
      task_delete_el.addEventListener("click", () => {
        // Remove the task from the array
        todos = todos.filter((t) => t.content !== todo.content);
        localStorage.setItem("todos", JSON.stringify(todos));
        // Remove the task element from the DOM
        list_el.removeChild(task_el);
      });
    });
  };

  // Render existing tasks when the page loads
  renderTasks();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value.trim();

    if (!task) {
      alert("Please enter a task");
      return;
    }

    const todo = {
      content: task,
      done: false,
      createdAt: new Date().toISOString(), // Corrected: new Date() instead of new Data()
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();

    input.value = "";

    // Render the newly added task
    renderTasks();
  });
});
