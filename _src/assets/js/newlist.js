'use strict';
function add (){
   
    const element = document.createElement('div');
    const text = document.createTextNode('hola');
    element.appendChild(text);
    element.setAttribute('class','js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
    document.getElementById('container-list').appendChild(element)
};


document.querySelectorAll('.ml-1').forEach(btn => {
    btn.addEventListener('click', add);
  });