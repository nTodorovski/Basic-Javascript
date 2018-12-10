let animal = {
    name: "name",
    kind: "kind",
    speak: function (message){
        para.innerHTML = `The animal is called ${this.name}.<br /> It is a/an ${this.kind}.<br / >The ${this.kind} says: ${message}`;
    }
}

let body = document.getElementsByTagName("body")[0];
let para = document.createElement("p");
para.id = "para";
body.appendChild(para);

let button = document.getElementById("button");
button.addEventListener("click",setting);


function setting(){
    let para1 = document.getElementById("para");
    para1.innerHTML = "";
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    if(isNaN(input1) && isNaN(input2)){
        animal.name = input1;
        animal.kind = input2;
        animal.speak(input3);
    } else{
        para1.innerHTML = "Please don't use numbers in the first two fields.";
    }
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
}
