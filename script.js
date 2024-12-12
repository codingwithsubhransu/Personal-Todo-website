// Get references to the input, button, and tasks container
let input = document.getElementById("input");
let add = document.getElementById("add");
let tasks = document.querySelector(".tasks");

// Event listeners for adding tasks (via button click or Enter key)
add.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Function to add a new task
function addTask() {
    let inputvalue = input.value.trim(); // Get the trimmed input value
    if (inputvalue === "") {
        alert("Please enter the task"); // Alert if the input is empty
        return;
    }

    createTaskElement(inputvalue); // Create the task element in the DOM
    saveTaskToLocalStorage(inputvalue); // Save the task in localStorage
    input.value = ""; // Clear the input field
}

// Function to create and display a task element
function createTaskElement(taskText) {
    // Create the task container
    const ptag = document.createElement("p");
    ptag.classList.add("task");

    // Create a delete button
    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Delete";

    // Create a checkbox
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Append checkbox, text, and button to the task container
    ptag.append(checkbox);
    ptag.appendChild(document.createTextNode(" " + taskText));
    label.appendChild(ptag);
    label.appendChild(button);

    // Add the task to the tasks container
    tasks.appendChild(label);

    // Event listener to toggle text-decoration when checkbox is clicked
    checkbox.addEventListener("change", () => {
        ptag.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    // Event listener to delete a task when the delete button is clicked
    button.addEventListener("click", () => {
        label.remove(); // Remove the task from the DOM
        removeTaskFromLocalStorage(taskText); // Remove the task from localStorage
    });
}

// Function to save a task to localStorage
function saveTaskToLocalStorage(taskText) {
    let tasks = localStorage.getItem("tasks") || ""; // Get existing tasks or initialize empty string
    tasks += tasks ? "|" + taskText : taskText; // Append the new task with a delimiter
    localStorage.setItem("tasks", tasks); // Save the updated tasks back to localStorage
}

// Function to remove a task from localStorage
function removeTaskFromLocalStorage(taskText) {
    let tasks = localStorage.getItem("tasks") || ""; // Get existing tasks
    let updatedTasks = tasks.split("|").filter(task => task !== taskText).join("|"); // Filter out the task to be deleted
    localStorage.setItem("tasks", updatedTasks); // Save the updated tasks back to localStorage
}

// Function to load tasks from localStorage and display them on the page
function loadTasks() {
    let tasks = localStorage.getItem("tasks") || ""; // Get existing tasks or initialize empty string
    if (tasks) {
        tasks.split("|").forEach(taskText => {
            createTaskElement(taskText); // Create and display each task
        });
    }
}

// This is the code for the task list application without localStorage support
/*let input = document.getElementById("input");
let inputValue = input.value;
let add = document.getElementById("add");
let tasks = document.querySelector(".tasks");
let task = document.querySelectorAll(".task");

add.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let inputvalue = input.value.trim();
    if(inputvalue === ""){
        alert("Please enter the task");
        return;
    }
    console.log(inputvalue);

    const ptag = document.createElement("p");
    ptag.classList.add("task");

    const button = document.createElement("button");
    button.classList.add("delete");
    button.innerText = "Delete";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";


    ptag.append(checkbox);
    ptag.appendChild(document.createTextNode(" "+ inputvalue));
    label.appendChild(ptag);
    label.appendChild(button);

    tasks.appendChild(label);

     checkbox.addEventListener("change", () => {
        ptag.style.textDecoration = checkbox.checked ? "outline" : "none";
    });

    button.addEventListener("click", () => {
        label.remove();
    })
    input.value = "";
};give me the code to store this code in the local storage and show it in the webpage everytime i update it so give me a clean code by modifying these code and explain me everything you added bit by bit with the use of comments and try to change as minimum as you can. 

*/