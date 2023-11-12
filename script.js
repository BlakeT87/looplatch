document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addTaskButton'); // Button for adding tasks
    const taskInput = document.getElementById('taskInput'); // Input field for new tasks
    const taskList = document.getElementById('taskList'); // UL element to display tasks

    // Function to add a new task
    function addTask(task) {
        const li = document.createElement('li'); // Create a new list item
        li.textContent = task; // Set the text of the list item to the task
        taskList.appendChild(li); // Add the new list item to the list
    }

    // Event listener for the add button
    addButton.addEventListener('click', function() {
        const task = taskInput.value; // Get the value of the input field

        if (task.trim() !== '') { // Check if the input is not empty
            addTask(task); // Add the task to the list
            taskInput.value = ''; // Clear the input field
        }
    });

    // Optional: Add functionality to remove tasks when clicked
    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            taskList.removeChild(e.target); // Remove the clicked task
        }
    });
});


