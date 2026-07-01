const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskContainer = document.querySelector("#taskContainer");

addBtn.addEventListener(('click'),()=>{
    if (input.value.trim() === "") {
    return;
    }

    
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");
        const taskText = document.createElement("span");
        taskText.innerText = input.value;
        taskText.classList.add("task-text");
        const checkbox=document.createElement("input")
        checkbox.type='checkbox'
        
        const actions = document.createElement("div");
        actions.classList.add("actions");
        const editBtn = document.createElement("button");
        editBtn.innerText = "✏️";
        editBtn.classList.add("edit-btn");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "🗑️";
        deleteBtn.classList.add("delete-btn");
        
       

        deleteBtn.addEventListener(('click'),()=>{
            taskCard.remove()
        })

        editBtn.addEventListener(('click'),()=>{
            const editinput=document.createElement('input')
            editinput.value=taskText.innerText
            editinput.classList.add('edit-input')

            const crctbtn=document.createElement('button')
            crctbtn.innerText='✓'
            crctbtn.classList.add('crct-btn')

            taskCard.replaceChild(editinput,taskText)
            actions.replaceChild(crctbtn,editBtn)

            crctbtn.addEventListener(('click'),()=>{
                if(editinput.value.trim()!=''){
                    taskText.innerText=editinput.value
                    taskCard.replaceChild(taskText,editinput)
                    actions.replaceChild(editBtn,crctbtn)
                }
                
                
            })
            
            
        })
        
        actions.append(editBtn)
        actions.append(deleteBtn)
        taskCard.append(checkbox)
        taskCard.append(taskText)
        taskCard.append(actions)
        taskContainer.append(taskCard)
        input.value = "";

        checkbox.addEventListener('change',()=>{
            console.log("completed")
            taskText.classList.toggle('completed')
        })
    
    
    
})






