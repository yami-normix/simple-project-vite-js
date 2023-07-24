let tasks = [];

export function addTask(taskText){
  const task = taskText.trim();
  if(task !== ''){
    tasks.push({ text: task, completed: false });
  }
}

export function getTasks(){
  return tasks;
}

export function toggleTask(taskId) {
  tasks[taskId].completed = !tasks[taskId].completed;
}

export function removeCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
}