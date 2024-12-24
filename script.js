let tasks = [];

// Function to add a new task
function addTask(name) {
    if (name === '') {
        console.log('Поле задач не может быть пустым.');
        return;
    }
    tasks.push({name: name, completed: false});
}

// Function to mark a task as completed
function completeTask(name) {
    let found = false;
    for (let task of tasks) {
        if (task.name === name) {
            task.completed = true;
            found = true;
            break;
        }
    }
    if (!found) {
        console.log('Задача не найдена дайте имя.');
    }
}

// Function to delete a task
function deleteTask(name) {
    let index = tasks.findIndex(task => task.name === name);
    if (index !== -1) {
        tasks.splice(index, 1);
    } else {
        console.log('Задача не найдена.');
    }
}

function displayTasks() {
    for (let task of tasks) {
        console.log(`Task: ${task.name}, Status: ${task.completed ? 'Завершено' : 'Не завершено'}`);
    }
}
