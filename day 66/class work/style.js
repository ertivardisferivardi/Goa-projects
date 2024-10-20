// const yearsOld = document.getElementById("myForm");
// const agee = myForm.age;
// const barrier = "18";
// const btn = myForm.btn;
// btn.addEventListener("click", checkup);
// function checkup(){
//     if(agee.value < barrier){
//         alert("You are too young. You must be at least 18 years old to continue.");
//     }else{
//         alert("You are old enough to continue.");
//     } 
     
    
// }
let list = [];
for (let i = 0; i < 31; i++) {
    list.push(i);
}
console.log(list);
let evenlist = [];

for (let i = 0; i < list.length + 1; i++) {
    if (list[i] % 2 === 0) {
        evenlist.push(list[i]);
    }
}

console.log(evenlist);
