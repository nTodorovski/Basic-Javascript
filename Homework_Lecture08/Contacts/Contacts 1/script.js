let idCounter = 1;
let trCounter = 0;
let contacts = [];
let activeContact = null;
let lastChar = 0;
let lastChar1 = 0;

let saveBtn = document.getElementById("save");
saveBtn.addEventListener("click",function(){
    if(activeContact){
        activeContact.firstName = document.getElementById("firstName").value;
        activeContact.lastName = document.getElementById("lastName").value;
        activeContact.email = document.getElementById("email").value;
        activeContact.password = document.getElementById("password").value;
        if (!validateValues(activeContact.firstName, activeContact.lastName, activeContact.email)){
            return;
        } else{
            let selectTr = document.getElementById(lastChar);
            selectTr.children[1].innerHTML = activeContact.firstName;
            selectTr.children[2].innerHTML = activeContact.lastName;
            selectTr.children[3].innerHTML = activeContact.email;
            selectTr.children[4].innerHTML = activeContact.password;
            activeContact = null;
            clear();
        }
    } else if(activeContact === null){
        let tbody = document.getElementsByTagName("tbody")[0];
        let tr = tbody.insertRow(trCounter);
        tr.id = trCounter+1;
        trCounter++;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (!validateValues(firstName, lastName, email)){
            return;
        } else{
        let contact = {
            id: idCounter,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
        contacts.push(contact);
        let td = tr.insertCell(0).innerHTML = contact.id; 
        let td1 = tr.insertCell(1).innerHTML = contact.firstName;
        let td2 = tr.insertCell(2).innerHTML = contact.lastName;
        let td3 = tr.insertCell(3).innerHTML = contact.email;
        let td4 = tr.insertCell(4).innerHTML = contact.password;
    
        let editBtn = document.createElement("button");
        editBtn.innerHTML = "Edit";
        editBtn.id = `edit${idCounter}`;
        editBtn.addEventListener("click",edit);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.id = `delete${idCounter}`;
        deleteBtn.addEventListener("click",delete1);

        let td5 = tr.insertCell(5);
        td5.appendChild(editBtn);
        td5.appendChild(deleteBtn);
        idCounter++;
        clear();
        }
    }
});

let discard = document.getElementById("discard");
discard.addEventListener("click",clear);

function clear(){
    let firstName = document.getElementById("firstName");
    firstName.value = "";
    let lastName = document.getElementById("lastName");
    lastName.value = "";
    let email = document.getElementById("email");
    email.value = "";
    let password = document.getElementById("password");
    password.value = "";
};
function edit(event){
    let event1 = event.target.id;
    lastChar =  event1[event1.length-1];
    activeContact = contacts[lastChar-1];
    document.getElementById("firstName").value = activeContact.firstName;
    document.getElementById("lastName").value = activeContact.lastName;
    document.getElementById("email").value = activeContact.email;
    document.getElementById("password").value = activeContact.password;
};
function delete1(event){
    let event2 = event.target.id;
    lastChar1 = event2[event2.length-1];
    let tr = document.getElementById(lastChar1);
    let tbody = document.getElementsByTagName("tbody")[0];
    tbody.removeChild(tr);

    let allTr = document.getElementsByTagName("tr");
    idCounter1 = 1;
    for(i=2;i<allTr.length;i++){
        allTr[i].children[0].innerHTML=idCounter1;
        idCounter1++;
    }
    idCounter1=0;
}
let validateValues = function(firstName, lastName, email){
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
  };
