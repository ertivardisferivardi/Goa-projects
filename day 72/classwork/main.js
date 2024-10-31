const time = document.getElementById("time");
time.style.fontSize = "50px";
let seconds = 20;
const t = setInterval(function() {
    
    time.textContent = seconds;
    seconds--;
    if (seconds === 0) {
        
        clearInterval(t);
        alert('Time is up!');
    }
},1000)