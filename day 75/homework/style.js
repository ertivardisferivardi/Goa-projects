document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText !== '') {
      const li = document.createElement('li');
      li.innerText = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.addEventListener('click', function() {
        li.remove();
      });
  
      li.appendChild(deleteBtn);
      document.getElementById('taskList').appendChild(li);
      document.getElementById('taskInput').value = '';
    }
  });
  