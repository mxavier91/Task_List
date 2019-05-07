// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a Task')
  }

  // Create an li element
  const li = document.createElement('li')
  // Add Class
  li.className = 'collection-item';
  // Create Text Node and Append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class to an a tag
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="fas fa-times"></i>'
  // Append link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li)

  console.log(li)

  // Clear Input
  taskInput.value = ''



  e.preventDefault()
}