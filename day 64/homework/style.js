const form = document.getElementById('myform');
const btn = document.getElementById('btn');
btn.onclick = function checkup() {

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const pass = form.elements.passw.value;
    const checkbox = form.elements.terms.checked;
    
    if (name === '' || email === '' || pass === '') {
        alert('Please fill all forms');
        return;
    }
    else if(!checkbox) {
        alert('Please confirm that you are not a robot');
        return;
    }
   
   
    else{
        alert('Form submitted successfully')
    console.log(name);
    console.log(email);
    console.log(pass);
    }
    
    

}
