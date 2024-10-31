// 1) შექმენით ფუნქცია, რომელიც გამოიტანს მესიჯს სამი წამის შემდეგ

// setTimeout(function () { 
//     alert("Hello");
// }, 5000);

// 2) შექმენით პროგრამა, რომელიც ყოველ წამს გამოიტანს ამჟამინდელ დროს "საათი:წუთი:წამი"
// const time = document.getElementById("time");
// setInterval(function () {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
//     time.textContent = (`${hours}:${minutes}:${seconds}`);
// })


// 3) შექმენით პროგრამა, რომელიც ყოველ 3 წამში შეცვლის საიტის background ფონის ფერს.(ფერის მნიშვნელობა შეინახეთ მასივში)

// let colors = ['red','green','blue','yellow','orange','purple'];
// setInterval(function(){
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
// },2000)


// 4) დაწერეთ პროგრამა, რომელიც ყოველ 5 წამში შეცვლის საიტზე არსებული პარაგრაფის textContent-ს
// const nums = document.getElementById("time");
// const interval = setInterval(function(){
//     let randomNum = Math.floor(Math.random() * 100);
//     nums.textContent = randomNum;
//     if(randomNum ===77){
//        clearInterval(interval); 
//     }
    
// },5000)


// 5) პროექტი:

// შექმენით პროგრამა ტაიმერი, რომელსაც გადასცემთ 3 ღილაკს Start,Pause,Reset
// const timer = document.getElementById('timer');
// const btnstart = document.getElementById('start');
// const btnpause = document.getElementById('pause');
// const btnreset = document.getElementById('reset');
// let interval;
// let seconds = 0;
// btnstart.addEventListener("click",function(){
//     if(!interval){
//      interval = setInterval(function(){
//         timer.textContent = seconds;
//         seconds++;
//     },1000)   
        
//     }
// })
// btnpause.addEventListener("click",function(){
//     clearInterval(interval);
//     interval = null;
// })
// btnreset.addEventListener("click",function(){
//     seconds = 0;
    
// })