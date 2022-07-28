const button = document.querySelector("button");
const body = document.querySelector('body');

body.style.backgroundColor = 'white';
const color = ['blue','green','purple','grey','orange','pink'];

button.addEventListener('click',changeB);

function changeB(){
    let colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex]; 
}