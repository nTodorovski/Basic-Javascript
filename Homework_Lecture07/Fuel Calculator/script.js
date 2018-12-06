let car = {
    model: "Chevrolet Cruze Sedan",
    color: "Red",
    year: 2010,
    fuel: "Petrol",
    fuelConsumption: 9,
    howMuch: function (km) {
        let liters = (km / 100) * this.fuelConsumption;
        return liters;
    }
}
let para1 = document.getElementById("para1");
para1.innerHTML = `Car: ${car.model}<br />Color: ${car.color}<br />Year: ${car.year}<br />Fuel: ${car.fuel}<br />Fuel Consumption: ${car.fuelConsumption}l/100km`;
para1.style.fontSize = "x-large";
let button = document.getElementById("button1");
button.addEventListener("click",function howMuch(){
    let value = Number(input1.value);
    if(document.getElementById("para")){
        para.innerHTML = "";
    }
    if(Number.isNaN(value)){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "Please enter number.";
        body.appendChild(para);
    } else if(input1.value === null || input1.value === ""){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "You didn't enter a value.";
        body.appendChild(para);
    } else{
        let input = document.getElementById("input1").value;
        let result = car.howMuch(input);
        let result1 = result.toFixed(2);
        let input2 = document.getElementById("input2");
        input2.value = `${result1} liters`;
    }
});