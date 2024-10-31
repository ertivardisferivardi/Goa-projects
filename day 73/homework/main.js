// const p = document.querySelector('p');
// p.innerHTML = `Hello World`;

// const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//   console.log(p.textContent);
// });

// const div = document.querySelector('div');
// const p = document.querySelector('p');
// let divColor = div.style.backgroundColor;
// div.style.backgroundColor = p.style.backgrounColor;
// p.style.color = divColor;

// const p = document.querySelector('h1');
// const btn = document.getElementById('button');
// const btn1 = document.getElementById('btn1');

// btn.addEventListener('click',function() {
//     p.style.display = "none";
// })
// btn1.addEventListener('click',function() {
    
//         p.style.display = "flex";
    
// });

// const btn = document.getElementById('btn');
// const ps = document.getElementsByClassName('class');

// btn.addEventListener('click', function() {
//     for (let i = 0; i < ps.length; i++) {
//         ps[i].style.fontZize = '20px';
//         ps[i].style.color = 'red';
//         ps[i].style.fontWeight = 'bold';
//     }
// })

const p = document.querySelector('p');
const img = document.querySelector('img');
const btn = document.querySelector('button');
const input = document.querySelector('input');


btn.addEventListener('click', function() {
    p.textContent = input.value;
    img.src = "apple.jpg";
});