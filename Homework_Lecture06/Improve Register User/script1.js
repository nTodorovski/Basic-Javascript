function createField(name, target) {
    let container = document.createElement("div");
    target.appendChild(container);
    let label = document.createElement("label");
    let input = document.createElement("input");
    input.type = (name !== "password") ? "text" : "password";
    input.name = name;
    input.id = name;
    label.for=name;
    label.innerText = name;
  
    container.appendChild(label);
    container.appendChild(input);
  }
  
  function createFields() {
    let body = document.getElementsByTagName("body")[0];
    let fieldNames = ["firstName", "lastName", "email", "password", "address"]
    for (const name of fieldNames) {
      createField(name, body);
    }
  
    let button = document.createElement("button");
    body.appendChild(button);
    button.textContent = "Register";
  
    let result = document.createElement("div"); // do tuka e kodot od Cas.
    let table = document.createElement("table"); 
    table.id = "table";
    table.border = "2";
    let tableHead = document.createElement("thead");
    tableHead.id = "tableHead";
    let tableRow = document.createElement("tr");
    tableRow.id="tableRow";
    tableHead.appendChild(tableRow);

    let tableBody = document.createElement("tbody");
    tableBody.id="tableBody";
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    result.appendChild(table);
    body.appendChild(result); //Do tuka kreiram tabela so thead i tbody, i vo Thead stavam <tr>.
    for (const name of fieldNames) {
        let tableRow1 = document.getElementById("tableRow");
        tableRow1.innerHTML += `<th>${name}</th>`; // Vo toj <tr> stavam da se prikazuvaat iminjata na labelite.
    }
    button.addEventListener("click", function(){
        let voTableBody = document.getElementById("tableBody");
        let tableRow2 = document.createElement("tr");//kriram <tr> za sekoj klik na button 
        voTableBody.appendChild(tableRow2); // i sekoj tr go stavam vo table body
        tableRow2.innerHTML = "";
        for (const name of fieldNames) {
            tableRow2.innerHTML += `<td>${document.getElementById(name).value}</td>`; // a vo sekoj TR stavam td koj ke ja sodrzi vrednosta.
          }
          for (const name of fieldNames) {
            document.getElementById(name).value = "";// gi resetiram vrednostite 
          }
    })
  }
  
  createFields();