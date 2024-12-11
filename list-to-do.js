function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  if (taskInput.value.trim() === "") return;

  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
    <span class="task-text">${taskInput.value}</span>
    <div class="task-actions">
      <button class="complete" onclick="markComplete(this)">
        <i class="fas fa-check-circle"></i>
      </button>
      <button class="edit" onclick="editTask(this)">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete" onclick="deleteTask(this)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function markComplete(button) {
  const taskText = button.closest("li").querySelector(".task-text");
  taskText.classList.toggle("completed");
}

function editTask(button) {
  const taskText = button.closest("li").querySelector(".task-text");
  const newTask = prompt("Editar tarea:", taskText.textContent);
  if (newTask) taskText.textContent = newTask;
}

function deleteTask(button) {
  const taskItem = button.closest("li");
  taskItem.remove();
}
