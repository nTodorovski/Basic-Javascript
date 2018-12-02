function generateTable(r,c){
    let body = document.getElementsByTagName("body")[0];
    let table = document.createElement("table");
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