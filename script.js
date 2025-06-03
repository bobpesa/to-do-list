// Select elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask)

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You have not entered a task");
        return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("task-item");


    const deleteBtn = document.createElement("p");
    deleteBtn.textContent = "❌"
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(listItem);
    });

    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    listItem.appendChild(deleteBtn);

    taskList.appendChild(listItem);

    taskInput.value = ""; // Clear the input field
}