let tezina = prompt("Kolku kilogrami imate?")
let tezina1 = Number(tezina);
if(Number.isNaN(tezina1) || tezina === null){
    let result1 = document.getElementById("result");
    result1.innerHTML = "Vnesovte nevaliden broj ili pritistnavte 'Cancel'.";
} else{
    weightInChickens();
}
function weightInChickens(tezina1) {
    let chickens = tezina*2;
    let result = document.getElementById("result");
    result.innerHTML = `<h1> Tezite kolku ${chickens} kokoshki</h1>`;

}
