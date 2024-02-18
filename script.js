let tasks = [];

// Function to add a task
function addTask() {
    // Get values from input fields
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;

    // Create task object
    let task = {
        title: title,
        description: description
    };

    // Add task to the array
    tasks.push(task);

    // Render tasks
    renderTasks();

    // Clear input fields
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

// Function to delete a task
function deleteTask(index) {
    // Remove task from the array
    tasks.splice(index, 1);

    // Render tasks
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    let tasksHtml = "";
    if (tasks.length === 0) {
        tasksHtml = "<div class='task'><span>Enter task</span></div>";
    } else {
        tasks.forEach((task, index) => {
            tasksHtml += `
                <div class="task">
                    <div class="title">
                        <span>${task.title}</span>
                    </div>
                    <div class="description">
                        <span>${task.description}</span>
                    </div>
                    <div class="button">
                        <button class="btn del" onclick="deleteTask(${index})">Delete task</button>
                    </div>
                </div>
            `;
        });
    }
    document.getElementById("allTasks").innerHTML = tasksHtml;
}