//array to store class
let tasks = [];

const renderTasks = () =>
{
    const taskList = document.getElementById('taskList');
    taskList.innerHTML=''
   
    tasks.forEach((task,index)=>{
        const li = document.createElement('li');
        li.textContent=task.name;
        const btn = document.createElement('button');
        btn.innerHTML='<div>Delete</div>';
        btn.className='delete-button';

        li.appendChild(btn)
        taskList.appendChild(li);
    });

}


const addTask = () =>{
    const name = document.getElementById('taskInput');
    if(name.value!== ''){
        const task = {
            name:name.value,
            date:new Date()
            
        }
        tasks.push(task);
        renderTasks();
        
    }
}
