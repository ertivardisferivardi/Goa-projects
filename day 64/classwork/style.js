let button = document.getElementById('btn');
button.onclick = function checkup() {
    let x = confirm('Are you an adult?')
    if(x === true){
        alert('Welcome to the site You are an adult')
    }
    else if(x === false){
        alert('Sorry, you can not access the site you are underage')
    }
    
}

checkup();