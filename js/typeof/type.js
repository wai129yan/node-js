// Module pattern to handle tasks
const TaskManager = (() => {
    // Private task storage and DOM elements
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
  
    // Private function to render tasks
    const renderTasks = () => {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.toggle('completed', task.completed);
        taskItem.innerHTML = `
          <span>${task.text}</span>
          <button class="delete-btn" onclick="TaskManager.deleteTask(${index})">Delete</button>
          <button class="complete-btn" onclick="TaskManager.toggleComplete(${index})">Complete</button>
        `;
        taskList.appendChild(taskItem);
      });
    };
  
    // Public function to add a new task
    const addTask = () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        saveTasks();
        renderTasks();
      }
    };
  
    // Public function to toggle task completion
    const toggleComplete = (index) => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    };
  
    // Public function to delete a task
    const deleteTask = (index) => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };
  
    // Private function to save tasks to localStorage
    const saveTasks = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    };
  
    // Public function to initialize the app
    const init = () => {
      addTaskBtn.addEventListener('click', addTask);
      renderTasks();
    };
  
    return {
      addTask,
      toggleComplete,
      deleteTask,
      init
    };
  })();
  
  // Initialize the app
  TaskManager.init();
  