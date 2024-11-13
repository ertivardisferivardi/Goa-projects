const form = document.querySelector('form');
const ol = document.querySelector('ol');
let itemId = 0;
function deleteItem(id){
    const item = document.getElementById(id);
    item.style.textDecoration = 'line-through';
    
}    

addEventListener("submit",function(e){
    e.preventDefault();
    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.textContent = input.value;
    li.id = `item ${itemId}`;
    ol.appendChild(li);
    li.onclick = function(){
        deleteItem(li.id);
    };
    input.value = "";
    itemId++;
})
