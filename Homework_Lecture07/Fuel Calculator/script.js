let car = {
    model: "model",
    color: "color",
    year: "year",
    fuel: "fuel",
    fuelConsumption: "fuelConsumption",
    howMuch: function (km) {
        let liters = (km / 100) * this.fuelConsumption;
        return liters;
    }
}
let button = document.getElementById("button1");
button.addEventListener("click",setting);

function setting(){
    let model = document.getElementById("1").value;
    car.model = model;
    let color = document.getElementById("2").value;
    car.color = color;
    let year = document.getElementById("3").value;
    car.year = year;
    let fuel = document.getElementById("4").value;
    car.fuel = fuel;
    let fuelConsumption = document.getElementById("5").value;
    car.fuelConsumption = fuelConsumption;
    let input1 = document.getElementById("input1");
    let value = Number(input1.value);
    let year1 = Number(year);
    let fuelConsumption1 = Number(fuelConsumption);
    if(Number.isNaN(fuelConsumption1)){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "Please enter a number for the fuel consumption.";
        body.appendChild(para); 
    } else if(Number.isNaN(year1)){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "Please enter a number for the year of the car.";
        body.appendChild(para);
    } else if(Number.isNaN(value)){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "Please enter number for the distance you want to pass.";
        body.appendChild(para);
    } else if(input1.value === null || input1.value === "" || model === null || model === "" || year === null || year === "" || fuel === null || fuel === "" || fuelConsumption === null || fuelConsumption === ""){
        let para = document.createElement("p");
        para.id = "para";
        let body = document.getElementsByTagName("body")[0];
        para.innerHTML = "You didn't enter a value in all of the fields.";
        body.appendChild(para);
    } else{
        let input = document.getElementById("input1").value;
        let result = car.howMuch(input);
        let result1 = result.toFixed(2);
        let input2 = document.getElementById("input2");
        input2.value = `${result1} liters`;
    }
}
