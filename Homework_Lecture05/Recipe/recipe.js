let name = prompt("What's the name of the recipe?");
let igredients = prompt("How many igredients do we need for the recipe");

let node = document.getElementById("myDiv");
let header = document.createElement("h1");
let textNode = document.createTextNode(name);
header.appendChild(textNode);
node.appendChild(header);

let list = document.createElement("ul");
node.appendChild(list);

for(i=0;i<igredients;i++) {
    let igredientName = prompt(`Please write the names of igredients`);
    let node1 = document.getElementsByTagName("ul");
    let listItem = document.createElement("li");
    let textNode1 = document.createTextNode(igredientName);
    listItem.appendChild(textNode1);
    node1[0].appendChild(listItem);
}

// --------------------------
// -------- BONUS -----------
// --------------------------

// let name = prompt("What's the name of the recipe?");
// let igredients = prompt("How many igredients do we need for the recipe");


// let table = document.createElement("table");
// table.id = "table";
// table.border = "1";
// let tableHead = document.createElement("thead");
// tableHead.id = "table-head";
// let tableHeadCell = document.createElement("th");
// tableHeadCell.id ="table-head-cell";
// let tableBody = document.createElement("tbody");
// tableBody.id = "table-body";
// let tableRowHead = document.createElement("tr");
// tableRowHead.id = "table-row-head";

// let node = document.getElementById("myDiv");
// node.appendChild(table);
// let node1 = document.getElementById("table");
// let textNode = document.createTextNode(name);
// tableHeadCell.appendChild(textNode);
// tableHead.appendChild(tableRowHead);
// tableRowHead.appendChild(tableHeadCell);
// node1.appendChild(tableHead);
// node1.appendChild(tableBody);


// for(j=0;j<igredients;j++) {
//     let tableRow = document.createElement("tr");
//     tableRow.id = "table-row";

//     for(i=0;i<=0;i++) {
//         let igredientName = prompt(`Please write the names of igredients`);
//         let tableCell = document.createElement("td");
//         tableCell.id = "table-cell";
//         let textNode1 = document.createTextNode(igredientName);
//         tableCell.appendChild(textNode1);
//         tableRow.appendChild(tableCell);
//         tableBody.appendChild(tableRow);
//     }
// }
