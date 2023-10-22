const taskManager = [{ todo: 'writing', status: 'pending' }, { todo: 'coding', status: 'completed' }];

document.getElementById('addform').addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = document.getElementById('addtask').value;
    taskManager.push({ todo: todo, status: 'In-progress' });
    displayContent(taskManager);
    addModal.hide();
});

//console.log(taskManager);

const displayContent = (data) => {

    const element = document.getElementById('content');
    element.innerHTML = '';
    data.map(( val, key ) => {
        
    element.innerHTML += `
    <div class="card border-0 shadow-sm mt-3">
    <div class="card-body">
        <h1 class="text-capitalize">${val.todo}</h1>
        <button class="btn" onClick='edit(${key})'><i class="fa-regular fa-pen-to-square"></i> Edit</button>
        <button class="btn"><i class="fa-solid fa-trash"></i> Delete</button>

        <span class = "badge float-end 
        ${
            val.status == 'pending' ? 'bg-warning' :
            val.status == 'completed' ? 'bg-success' : 'bg-secondary'
            }">
    ${val.status}</span>
    </div>
    </div>
    `;
        //console.log(val)
       //console.log(val.todo);
       // console.log(data);
    })
    

}

displayContent(taskManager);

var addModal = new bootstrap.Modal(document.getElementById('addModal'))




