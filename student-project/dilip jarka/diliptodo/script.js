const taskInput = document.getElementById("task");
const dateTimeInput = document.getElementById("dt");
const addButton = document.getElementById("btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {
    const task = taskInput.value.trim();
    const dateTime = dateTimeInput.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>
            <strong>${task}</strong><br>
            <small>${dateTime}</small>
        </span>
        <button class="delete-btn">❌</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", function () {
        li.remove();
    });

    todoList.appendChild(li);

    taskInput.value = "";
    dateTimeInput.value = "";
});