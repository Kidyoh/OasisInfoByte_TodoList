document.getElementById('add-btn').addEventListener('click', function() {
    var value = document.getElementById('todo-input').value;
    var dueDate = document.getElementById('due-date').value;
    if (value) {
        addItem(value, dueDate);
        document.getElementById('todo-input').value = '';
        document.getElementById('due-date').value = '';
    }
});

function addItem(text, dueDate) {
    var list = document.getElementById('todo-list');

    var item = document.createElement('li');
    item.classList.add('todo-item');

    var taskText = document.createElement('span');
    taskText.innerText = text;

    var taskDueDate = document.createElement('span');
    taskDueDate.innerText = dueDate ? 'Due: ' + dueDate : '';

    var completeBtn = document.createElement('button');
    completeBtn.innerText = 'Complete';
    completeBtn.addEventListener('click', function() {
        list.removeChild(item);
        item.classList.remove('todo-item');
        item.classList.add('completed-item');
        document.getElementById('completed-tasks').appendChild(item);
        completeBtn.innerText = 'Remove';
        completeBtn.addEventListener('click', function() {
            document.getElementById('completed-tasks').removeChild(item);
        });
    });

    item.appendChild(taskText);
    item.appendChild(taskDueDate);
    item.appendChild(completeBtn);
    list.appendChild(item);
}