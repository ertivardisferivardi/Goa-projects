const pp =  document.getElementsByClassName('p');

for(let i = 0; i < pp.length; i++) {
    pp[i].style.color = 'red';
    pp[i].style.fontSize = '20px';
}
const ppp = document.getElementById("pp");
const ps = document.getElementsByClassName("class");

for(let i = 0; i < ps.length; i++) {
    ps[i].innerHTML +=`<p> Has passed </p>`;
    ps[i].style.color = 'grey';
}
ppp.innerHTML +=`Luka Murgvashvili`;

const div = document.querySelector('div');
div.style.display = 'Flex';
div.style.flexDirection ='column';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
div.style.fontSize = "30px";