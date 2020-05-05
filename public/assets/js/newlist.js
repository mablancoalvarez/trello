'use strict';

const containerCard1 = document.querySelector('container-list1');
const containerCard2 = document.querySelector('container-list2');
const containerCard3 = document.querySelector('container-list3');


// const add = function (event){
// console.log(event.target)
//     const element = document.createElement('article');
   
//     element.setAttribute('class','js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
//     element.setAttribute('id','main-div');
    
//     mainContainer.appendChild(element);
   
//      const element2 = document.createElement('div');
//      const span1= document.createElement('span');
//      const span2 = document.createElement('span');
//      const span3 = document.createElement('span');

//      const span1text = document.createTextNode('JS');
//      const span2text = document.createTextNode('Css');
//      const span3text = document.createTextNode('Html');

//     element2.appendChild(span1);
//     element2.appendChild(span2);
//     element2.appendChild(span3);

//     span1.setAttribute('class','badge badge-secondary bg-success');
//     span2.setAttribute('class','badge badge-secondary bg-success');
//     span3.setAttribute('class','badge badge-secondary bg-success');

//     span1.appendChild(span1text);
//     span2.appendChild(span2text);
//     span3.appendChild(span3text);
    
//     element.appendChild(element2)

//     const text = document.createTextNode('Pintar card');
//     element.appendChild(text);
//     // const element3 = document.createElement('h3');
//     // element3.setAttribute('class','h6');
//     // text = document.createTextNode('Ejemplo');
//     // element3.appendChild(text);
//     // document.getElementById('main-div').appendChild(element3);
    
// };


document.querySelectorAll('.app-list').forEach(item => {
   const mainContainer = item.querySelector('.p-1.rounded-sm.bg-primary.shadow')

    const buttonadd = item.querySelector('.ml-1')
    buttonadd.addEventListener('click', add)
 function add(){
      
            const element = document.createElement('article');

            element.setAttribute('class','js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
            element.setAttribute('id','main-div');
            
            mainContainer.appendChild(element);
           
             const element2 = document.createElement('div');
             const span1= document.createElement('span');
             const span2 = document.createElement('span');
             const span3 = document.createElement('span');
        
             const span1text = document.createTextNode('JS');
             const span2text = document.createTextNode('Css');
             const span3text = document.createTextNode('Html');
        
            element2.appendChild(span1);
            element2.appendChild(span2);
            element2.appendChild(span3);
        
            span1.setAttribute('class','badge badge-secondary bg-success');
            span2.setAttribute('class','badge badge-secondary bg-success');
            span3.setAttribute('class','badge badge-secondary bg-success');
        
            span1.appendChild(span1text);
            span2.appendChild(span2text);
            span3.appendChild(span3text);
            
            element.appendChild(element2)
        
            const text = document.createTextNode('Pintar card');
            element.appendChild(text);
            // const element3 = document.createElement('h3');
            // element3.setAttribute('class','h6');
            // text = document.createTextNode('Ejemplo');
            // element3.appendChild(text);
            // document.getElementById('main-div').appendChild(element3);
            
        };
        

  });

//# sourceMappingURL=newlist.js.map
