window.addEventListener("load" , ()=>{
    const form=document.getElementById("task-form");
    const add_task=document.getElementById("add-input");
    const added_tasks=document.getElementById("added-task");

    form.addEventListener('submit' , (e)=>{
        e.preventDefault();
        const taskvalue = add_task.value;
        if(!taskvalue){
            alert("Please Add Task")
        }else{
            added_tasks.classList.add("task-wrap");

            const Filled_task = document.createElement("div");
            Filled_task.classList.add("add_task_inputs", 'bg-red-600', 'w-[500px]', 'h-[75px]', 'border', 'border-black', 'flex', 'justify-around', 'p-4', 'mt-5');


            const Filled_input = document.createElement("input");
            Filled_input.type = "text";
            Filled_input.classList.add("input-filed", 'w-64', 'h-11', 'p-4', 'text-xl');
            Filled_input.setAttribute("readonly" , "readonly");
            Filled_input.value = taskvalue;


            const Edit_btn = document.createElement("button");
            Edit_btn.classList.add("btn", 'bg-white', 'w-20', 'h-11', 'p-2', 'text-lg', 'text-red-600', 'font-bold');
            Edit_btn.innerHTML = "Edit";

            
            const Delete_btn = document.createElement("button");
            Delete_btn.classList.add("btn",'bg-white', 'w-20', 'h-11', 'p-2', 'text-lg', 'text-red-600', 'font-bold');
            Delete_btn.innerHTML = "Delete";


            Filled_task.appendChild(Filled_input)
            Filled_task.appendChild(Edit_btn);
            Filled_task.appendChild(Delete_btn);
            added_tasks.appendChild(Filled_task);

            add_task.value = "";
        Edit_btn.addEventListener("click" , ()=>{
            if(Edit_btn.innerHTML=="Edit"){
                Edit_btn.innerHTML = "Save"
                Filled_input.removeAttribute("readonly");
                Filled_input.focus();
            }else{
                Filled_input.setAttribute("readonly" , "readonly");
                Edit_btn.innerHTML = "Edit"
            }
        });
        Delete_btn.addEventListener("click" , ()=>{
            added_tasks.removeChild(Filled_task);
        });
        }
    });
});