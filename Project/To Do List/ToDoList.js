let todo = [];

const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');
const addTaskBtn = document.getElementById('addTaskBtn');
const deleteTaskBtn = document.getElementById('deleteTaskBtn');

// Add task event
addTaskBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task) {
    todo.push(task);
    updateTaskList();
    taskInput.value = ''; // Clear input field
  } else {
    alert('Please enter a task.');
  }
});

// Delete the last task event
deleteTaskBtn.addEventListener('click', () => {
  if (todo.length > 0) {
    todo.pop();
    updateTaskList();
  } else {
    alert('No tasks to delete.');
  }
});

// Function to update the task list display
function updateTaskList() {
  taskList.innerHTML = ''; // Clear the current list
  todo.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;

    // Add click event to delete individual tasks
    li.addEventListener('click', () => {
      todo.splice(index, 1); // Remove task from array
      updateTaskList(); // Update the displayed list
    });

    taskList.appendChild(li);
  });
}