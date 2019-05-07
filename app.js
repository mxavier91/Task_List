// Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners

loadEventListeners();

function loadEventListeners() {
  // Add Task Event
  form.addEventListener('submit', addTask);
  // Remove Task Event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTask)
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

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks
function clearTasks() {
  // Ways to achieve this functionality

  // 1. taskList = '';

  // 2. This is Faster
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
}

// Filter Task
function filterTask(e) {
  // This will give us what the user is typing in the form
  const text = e.target.value.toLowerCase();

  // .querySelectorAll return a NodeList
  document.querySelectorAll('.collection-item').forEach(function(task) {
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block'
    } else {
      task.style.display = 'none';
    }
  })
}