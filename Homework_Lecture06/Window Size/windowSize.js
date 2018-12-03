let w = window.innerWidth;
let h = window.innerHeight;
let paragrapgh = document.createElement("p");
let body = document.getElementsByTagName("body")[0];
paragrapgh.textContent=`Width: ${w} Height: ${h}`;
body.appendChild(paragrapgh);
window.addEventListener("resize",golemina);
function golemina(){
    let w = window.innerWidth;
    let h = window.innerHeight; 
    paragrapgh.textContent=`Width: ${w} Height: ${h}`;
}