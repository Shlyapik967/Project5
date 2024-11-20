class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name) {
        if (!name || name.trim() === "") {
            console.log("Ошибка: название задачи не может быть пустым.");
            return;
        }

        this.tasks.push({ name: name, completed: false });
        console.log(`Добавлена задача: "${name}"`);
    }

    completeTask(name) {
        const task = this.tasks.find(task => task.name === name);
        if (task) {
            task.completed = true;
            console.log(`Задача "${name}" выполнена.`);
        } else {
            console.log(`Ошибка: задача "${name}" не найдена.`);
        }
    }

    deleteTask(name) {
        const index = this.tasks.findIndex(task => task.name === name);
        if (index !== -1) {
            const removedTask = this.tasks.splice(index, 1);
            console.log(`Удалена задача: "${removedTask[0].name}"`);
        } else {
            console.log(`Ошибка: задача "${name}" не найдена.`);
        }
    }

    displayTasks() {
        if (this.tasks.length === 0) {
            console.log("Нет задач в списке.");
            return;
        }

        console.log("Список задач:");
        this.tasks.forEach(task => {
            const status = task.completed ? "Выполнена" : "Не выполнена";
            console.log(`- "${task.name}": ${status}`);
        });
    }
}

const myTasks = new TaskManager();
myTasks.addTask("Купить продукты");
myTasks.addTask("Сделать домашнее задание");
myTasks.displayTasks();
myTasks.completeTask("Купить продукты");
myTasks.displayTasks();
myTasks.deleteTask("Сделать домашнее задание");
myTasks.displayTasks();
myTasks.deleteTask("Не существующая задача");