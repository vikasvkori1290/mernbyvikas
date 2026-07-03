const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskContainer = document.querySelector("#taskContainer");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => {
    createTask(task.text, task.completed);
});



addBtn.addEventListener(('click'),()=>{
    if (input.value.trim() === "") {
    return;
    }
    createTask(input.value, false);
    input.value = "";
    saveTasks();
})

function createTask(taskText, completed) {

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskTextSpan = document.createElement("span");
    taskTextSpan.innerText = taskText;
    taskTextSpan.classList.add("task-text");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;

    if (completed) {
        taskTextSpan.classList.add("completed");
    }

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏️";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑️";
    deleteBtn.classList.add("delete-btn");

    actions.append(editBtn);
    actions.append(deleteBtn);

    taskCard.append(checkbox);
    taskCard.append(taskTextSpan);
    taskCard.append(actions);

    taskContainer.append(taskCard);

    // Delete
    deleteBtn.addEventListener("click", () => {
        taskCard.remove();
        saveTasks();
    });

    // Edit
    editBtn.addEventListener("click", () => {

        const editInput = document.createElement("input");
        editInput.value = taskTextSpan.innerText;
        editInput.classList.add("edit-input");

        const correctBtn = document.createElement("button");
        correctBtn.innerText = "✓";
        correctBtn.classList.add("crct-btn");

        taskCard.replaceChild(editInput, taskTextSpan);
        actions.replaceChild(correctBtn, editBtn);

        correctBtn.addEventListener("click", () => {

            if (editInput.value.trim() !== "") {

                taskTextSpan.innerText = editInput.value;

                taskCard.replaceChild(taskTextSpan, editInput);
                actions.replaceChild(editBtn, correctBtn);

                saveTasks();
            }

        });

    });

    // Checkbox
    checkbox.addEventListener("change", () => {

        taskTextSpan.classList.toggle("completed");

        saveTasks();

    });

}

// localStorage.clear();






//saving
function saveTasks() {
    const tasks = [];
    const taskCards = taskContainer.querySelectorAll(".task-card");
    taskCards.forEach(task=>{
    const taskObj={
        text:task.querySelector('.task-text').innerText,
        completed:task.querySelector('input[type="checkbox"]').checked
    }
    tasks.push(taskObj)
})


localStorage.setItem('tasks',JSON.stringify(tasks))

}




