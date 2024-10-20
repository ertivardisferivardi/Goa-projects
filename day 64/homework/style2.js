const form = document.getElementById('myform');
const btn = document.getElementById('btn');
btn.onclick = function checkup() {

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const passw = form.elements.passw.value;
    const radio = form.elements.gender.value;
    
    if (name === '' || email === '' || passw === '') {
        alert('Please fill all forms');
        return;
    }
    
    else if (passw.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }
    if(!radio) {
        alert('Please confirm Your gender');
        return;
    }

   
    else{
        alert('Form submitted successfully')
    console.log(name);
    console.log(email);
    console.log(passw);
    console.log(gender);
    }
    
    

}
