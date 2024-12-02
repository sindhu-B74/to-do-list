// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

// Add task to list
addTaskBtn.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");

    // Add task text to the list item
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    // Mark task as completed when clicked
    li.querySelector(".task-text").addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Delete task when delete button is clicked
    li.querySelector(".delete-btn").addEventListener("click", function() {
        todoList.removeChild(li);
    });

    // Append the new task to the list
    todoList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}

// Optional: Allow Enter key to add task
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});