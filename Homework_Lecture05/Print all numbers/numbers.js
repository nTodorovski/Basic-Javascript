let numbers = [1,2,3,4,5,6,7,8,9];

let list = document.createElement("ul");
let body = document.getElementsByTagName("body")[0];

for(i=0;i<numbers.length;i++) {
    let brojki = numbers[i];
    let node = document.createElement("li");
    let textNode = document.createTextNode(brojki);
    node.appendChild(textNode);
    list.appendChild(node);
}

let lista = "";
let result = 0;

for(i=0;i<numbers.length;i++) {
    if(i === (numbers.length-1)) {
        lista = lista + numbers[i];
        result = result + numbers[i];
    } else {
        lista = lista + numbers[i] + "+";
        result = result + numbers[i];
    }
}

let node1 = document.createElement("li");
let textNode1 = document.createTextNode(`${lista} = ${result}`);
node1.appendChild(textNode1);
list.appendChild(node1);
let paragraph = document.createElement("p");
paragraph.appendChild(list);
body.appendChild(paragraph);