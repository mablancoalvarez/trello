'use strict';
function add (element){
   
    const motherElement = element.parentElement;
    console.log(motherElement)
	const addElement = document.createElement("div");
	motherElement.appendChild(addElement);
	addElement.setAttribute("id","agregar");
	addElement.classList.add("agregar");
	//Nodo elemento
	let textAgregar = document.createTextNode("Añadir una tarjeta");
	addElement.appendChild(textAgregar);

};


document.querySelectorAll('.ml-1').forEach(btn => {
    btn.addEventListener('click', add);
  });
//# sourceMappingURL=newlist.js.map
