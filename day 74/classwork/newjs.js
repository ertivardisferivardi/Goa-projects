const Name = document.getElementById('name');
const surname = document.getElementById('surname');
const Email = document.getElementById('email');

const table = document.querySelector('table');
const Submit = document.getElementById('submit');
const reset = document.getElementById('reset');


Submit.addEventListener('click', function () {
    Name.appendChild(table);
    surname.appendChild(table);
    Email.appendChild(Email);
    
});


reset.addEventListener("click", function(){
    table = ''
})
