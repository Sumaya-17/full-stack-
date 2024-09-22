document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const dashboard = document.getElementById("dashboard");
    const authSection = document.getElementById("authSection");
    const tasks = document.getElementById("tasks");
    const totalTasks = document.getElementById("totalTasks");
    const tasksToday = document.getElementById("tasksToday");
    const taskForm = document.getElementById("taskForm");

    let taskArray = [];

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        authSection.style.display = "none";
        dashboard.style.display = "block";
    });

    taskForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const category = document.getElementById("category").value;
        const deadline = document.getElementById("deadline").value;

        const task = { title, description, category, deadline };
        taskArray.push(task);
        updateTaskList();
        taskForm.reset();
    });

    function updateTaskList() {
        tasks.innerHTML = "";
        taskArray.forEach((task, index) => {
            const li = document.createElement("li");
            li.classList.add("list-group-item");
            li.innerHTML = `
                <strong>${task.title}</strong><br>
                <small>${task.description} - ${task.category} - ${task.deadline}</small>
            `;
            tasks.appendChild(li);
        });

        totalTasks.textContent = taskArray.length;
        tasksToday.textContent = taskArray.filter(task => new Date(task.deadline).toDateString() === new Date().toDateString()).length;
    }
});
