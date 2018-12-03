let paragraph = document.createElement("h2");
paragraph.innerHTML="Hello User.<br />";
paragraph.innerHTML +="This application generates a table.";
let body = document.getElementsByTagName("body")[0];
body.appendChild(paragraph);

let labelRows = document.createElement("label");
let inputRows = document.createElement("input");
inputRows.type="text";
inputRows.id = "rows";
inputRows.id = "rows";
labelRows.for="rows";
labelRows.innerHTML = "Enter Rows of the table:";
body.appendChild(labelRows);
body.appendChild(inputRows);

let labelColumns = document.createElement("label");
let inputColumns = document.createElement("input");
inputColumns.type="text";
inputColumns.id = "columns";
inputColumns.id = "columns";
labelColumns.for="columns";
labelColumns.innerHTML = "<br />Enter Columns of the table:";
body.appendChild(labelColumns);
body.appendChild(inputColumns);

let button = document.createElement("button");
body.appendChild(button);
button.textContent = "Enter";
let paragraph1 = document.createElement("p");
paragraph1.id = "para1";
body.appendChild(paragraph1);
let counter1=0; // counter koj ke mi sluzi za id na tabelite

button.addEventListener("click", function values(){
    let result = document.getElementById("rows").value;
    let result1 = document.getElementById("columns").value;
    let numResult = Number(result);
    let numResult1 = Number(result1);
    let niza = [result,result1];

    if(counter1>=1){
        let tabela1 = document.getElementById(`table${counter1}`);
        body.removeChild(tabela1);
    }
    if(result === "" || result1 === ""){
        paragraph1.innerHTML = "";
        paragraph1.innerHTML="Error: Please enter values in the both fields.";
        paragraph1.style.fontSize="xx-large";
        document.getElementById("rows").value = "";
        document.getElementById("columns").value = "";
    } else if(Number.isNaN(numResult) || Number.isNaN(numResult1)){
        let paragraph11 = document.getElementById("para1");
        paragraph11.innerHTML="Error: Please enter numbers in the fields."
        paragraph11.style.fontSize="xx-large";
        document.getElementById("rows").value = "";
        document.getElementById("columns").value = "";
    } else{
        let paragraph2 = document.getElementById("para1");
        paragraph2.innerHTML="";
        counter1++;
        generateTable(niza[0],niza[1]);
        document.getElementById("rows").value = "";
        document.getElementById("columns").value = "";
    }
})

function generateTable(r,c){
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
    table.id = `table${counter1}`
    table.border = "2";
    table.width = "400";
    let tableBody = document.createElement("tbody");
    let counter = 0; // counter koj ke mi stava ID na TD-ovcite
    for(i=0;i<r;i++){
        let tableRow = document.createElement("tr");
        for(j=0;j<c;j++){
            let tableCell = document.createElement("td");
            tableCell.innerHTML=`Row : ${i+1}  Column : ${j+1}`;
            tableCell.id = counter;
            counter++;
            tableRow.appendChild(tableCell);
        }
        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody);
    body.appendChild(table);
    let max = 255;
    let min = 0;
    function boja(){ // funkcija koja ke generira broj od 0 do 255
        let result = parseInt(Math.random()*(max-min+1)+min);
        return result;
    }
    for(k=0;k<counter;k++){ // for za da mi gi najde TD-ovcite
        let smeniBoja = document.getElementById(`${k}`);
        smeniBoja.style.backgroundColor='rgb('+boja()+ ',' +boja()+ ',' + boja() + ')';
    }
}
