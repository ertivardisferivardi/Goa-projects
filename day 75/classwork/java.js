const form = document.querySelector('form');
const tbody = document.querySelector('tbody');

form.addEventListener("submit" , function(event) {
    event.preventDefault();

    const fname = form.fname.value;
    const email = form.email.value;
    const pass = form.pass.value;
     
    const arryy = [fname,email,pass];
    const tr = document.createElement("tr");
    for (let i = 0; i < arryy.length; i++) {
        const td = document.createElement('td')
        td.textContent = arryy[i];
        tr.appendChild(td);
    }
    form.fname.value = "";
    form.email.value = "";
    form.pass.value = "";
    tbody.appendChild(tr);
})