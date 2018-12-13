let rowCounter = 1;
let editCounter = 1;
let deleteCounter = 1;
let contact = "inactive";
let event1 = "";
let event2 = "";
let allId = "";
let idCounter = 1;
let kopce = document.getElementById("save");
kopce.addEventListener("click",function(){
    if(contact === "active"){ // ako sum stisnal edit togas contact e active i save ke pravi ova
        let firstName2 = document.getElementById("firstName").value;
        let lastName2 = document.getElementById("lastName").value;
        let email2 = document.getElementById("email1").value;
        if (!validateValues(firstName2, lastName2, email2)){
            return;
        } else{ // ako pomine validacijata togas si gi podesuvam Td-ovcite i contact go setiram na inactive
            let lastChar1 = event1[event1.length -1];
            let td1 = document.getElementById(`${lastChar1}td1`);
            td1.innerHTML = firstName2;
            let td2 = document.getElementById(`${lastChar1}td2`);
            td2.innerHTML = lastName2;
            let td3 = document.getElementById(`${lastChar1}td3`);
            td3.innerHTML = email2;
            contact = "inactive";
        
        
            brishi(); //posle sekoj click na save da gi brishe polinjata
        
        }
    } else if(contact === "inactive"){//ako ne sum stisnal edit togas save ke izvrsuva ova

    //kreiram tuka eden TD koj ke mi go sodrzi broevite vo ID poleto
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.style.fontSize = "20px";
    tbody.style.fontFamily = "Arial";
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.className= `id`;
    td.style.fontWeight = "bold";
    td.style.textAlign = "center";
    td.innerHTML = `${idCounter}`;
    
    tr.appendChild(td);
    
    //kreiram TD so First Name
    let td1 = document.createElement("td");
    let firstName = document.getElementById("firstName");
    let firstName1 = firstName.value;
    td1.id = `${rowCounter}td1`;
    td1.innerHTML = `${firstName1}`;
    td1.style.textAlign = "center";
 
    //kreiram TD so Last Name
    let td2 = document.createElement("td");
    let lastName = document.getElementById("lastName");
    let lastName1 = lastName.value;
    td2.id = `${rowCounter}td2`;
    td2.innerHTML = `${lastName1}`;
    td2.style.textAlign = "center";
 
    //kreiram TD so Email
    let td3 = document.createElement("td");
    let email = document.getElementById("email1");
    let email1 = email.value;
    td3.id = `${rowCounter}td3`;
    td3.innerHTML = `${email1}`;
    td3.style.textAlign = "center";
 
    //button edit
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let edit = document.createElement("button");
    edit.id=`edit${editCounter}`;
    edit.innerHTML=`edit`;
 
    //button delete
    let td6 = document.createElement("td");
    let delete1 = document.createElement("button");
    delete1.id = `delete${deleteCounter}`;
    delete1.innerHTML=`delete`;
    

    //delete ke go brishe selektiraniot TR i idCounterot ke go podesuva
    delete1.addEventListener("click",function(event){
        event2 = event.target.id;
        let lastChar = event2[event2.length-1];
        let tbody = document.getElementsByTagName("tbody")[0];
        let tr = document.getElementById(`${lastChar}`);
        tbody.removeChild(tr);
        
        allId = document.querySelectorAll(".id");
        let sum = 0;
        for(i=0;i<allId.length;i++){
            allId[i].innerHTML = `${i+1}`;
            sum = i+1;
        }
        idCounter = sum+1;
    });

    //Validacijata od cas e tuka
    if (!validateValues(firstName1, lastName1, email1)){
        return;
    } else{ // ako pomine validacijata togas zgolemi gi counterite site i stavi gi site elementi vo Table Body
        idCounter++;
        tr.id=`${rowCounter}`;

        deleteCounter++;
        editCounter++;
        rowCounter++;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td5.appendChild(edit);
        td4.appendChild(td5);
        td6.appendChild(delete1);
        td4.appendChild(td6);
        tr.appendChild(td4);
        tbody.appendChild(tr);
    }

    
    //edit ke gi vrakja site tekstovi od td-ovcite vo input polinjata i ke go setira contact na activ
    edit.addEventListener("click",function(event){
        event1 = event.target.id;
        let lastChar = event1[event1.length -1];
        let td1 = document.getElementById(`${lastChar}td1`).innerHTML;
        document.getElementById("firstName").value = td1;
        let td2 = document.getElementById(`${lastChar}td2`).innerHTML;
        document.getElementById("lastName").value = td2;
        let td3 = document.getElementById(`${lastChar}td3`).innerHTML;
        document.getElementById("email1").value = td3;
        contact = "active";
        });



    
    brishi(); //posle sekoj click na save da go brishe tekstot na input polinjata
    }
});

let discard = document.getElementById("discard");  // isto taka go brishe tekstot na input polinjata
discard.addEventListener("click",function(){
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email1");
    firstName.value = "";
    lastName.value = "";
    email.value = "";    
});

function brishi(){ //funkcija koja ke go brishe tekstot od input polinjata
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email1");
    firstName.value = "";
    lastName.value = "";
    email.value = "";    
}

let validateValues = function(firstName, lastName, email) { // funkcijata od cas za validacija
    let errorDiv = document.getElementById("error");
    if (!firstName) {
      errorDiv.textContent = "Please enter first name";
      return false;
    }
    if (!firstName.match(/^[A-Z][a-z]+$/)) {
      errorDiv.textContent = "Please enter valid first name";
      return false;
    }
    if (!lastName) {
      errorDiv.textContent = "Please enter last name";
      return false;
    }
    if (!lastName.match(/^[A-Z][a-z]+$/)) {
      errorDiv.textContent = "Please enter valid last name";
      return false;
    }
    if (!email) {
      errorDiv.textContent = "Please enter email";
      return false;
    }
    if (!email.match(/^\w(\w|\.)*@\w+\.\w+$/)) {
      errorDiv.textContent = "Please enter a valid email";
      return false;
    }
    errorDiv.textContent = "";
    return true;
  }