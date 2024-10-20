function checkup(){
    const age = prompt("Please enter your age ");
    
    if(age === ""){
        
        const x = prompt("You must confirm your age");
        if(Number(x) < 18){
            alert(`${18 - (age + x)} more years to go to be an adult`);

    
       
        }
        else{
            alert("Congratulations! You are an adult now");
        }
        return;
    }
    if(Number(age) < 18){
        alert(`${18 - age} more years to go to be an adult`);
    }
    else{
        alert("Congratulations! You are an adult now");
    }
   

   
    
    
    
}
checkup();