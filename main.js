import './style.css';
import { addTask, getTasks, toggleTask, removeCompletedTasks } from './tasks'; // Importamos nuevas funciones

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
  addTask(taskInput.value);
  renderTasks();
  taskInput.value = '';
});

taskList.addEventListener('change', (event) => {
  const taskId = event.target.getAttribute('data-task-id');
  toggleTask(taskId);
  //removeCompletedTasks();
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = '';
  const tasks = getTasks();
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} data-task-id="${index}">
      <span>${task.text}</span>
    `;
    taskList.appendChild(taskItem);
  });
}

renderTasks();









