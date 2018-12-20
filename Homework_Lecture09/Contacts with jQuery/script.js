let idCounter = 1;
let trCounter = 0;
let contacts = [];
let activeContact = null;
let lastChar = 0;
let lastChar1 = 0;

let saveBtn = $("#save").click(function(){
    if(activeContact){
        activeContact.firstName = $("#firstName").val();
        activeContact.lastName = $("#lastName").val();
        activeContact.email = $("#email").val();
        activeContact.password = $("#password").val();
        if (!validateValues(activeContact.firstName, activeContact.lastName, activeContact.email)){
            return;
        } else{
            $(`#${lastChar} td:nth-child(2)`).text(`${activeContact.firstName}`);
            $(`#${lastChar} td:nth-child(3)`).text(`${activeContact.lastName}`);
            $(`#${lastChar} td:nth-child(4)`).text(`${activeContact.email}`);
            $(`#${lastChar} td:nth-child(5)`).text(`${activeContact.password}`);
            activeContact = null;
            clear();
        }
    } else if(activeContact === null){
        let tr = $(`<tr id="${trCounter+1}"></tr>`).appendTo($("tbody"));
        trCounter++;
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let email = $("#email").val();
        let password = $("#password").val();
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
        tr.append(`<td>${contact.id}</td>`);
        tr.append(`<td>${contact.firstName}</td>`);
        tr.append(`<td>${contact.lastName}</td>`);
        tr.append(`<td>${contact.email}</td>`);
        tr.append(`<td>${contact.password}</td>`);
        tr.append(`<td><button id="edit${idCounter}">Edit</button><button id="delete${idCounter}">Delete</button></td>`);
    
        $(`#edit${idCounter}`).click(edit);
        $(`#delete${idCounter}`).click(delete1);
        idCounter++;
    }
}
});
$("#discard").click(clear);

function clear(){
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
};
function edit(event){
    let event1 = event.target.id;
    lastChar =  event1[event1.length-1];
    activeContact = contacts[lastChar-1];
    $("#firstName").val(activeContact.firstName);
    $("#lastName").val(activeContact.lastName);
    $("#email").val(activeContact.email);
    $("#password").val(activeContact.password);
};
function delete1(event){
    let event2 = event.target.id;
    lastChar1 = event2[event2.length-1];
    $(`#${lastChar1}`).remove();

    idCounter1 = 1;
    let allTr = $("tr");
    for(i=2;i<allTr.length;i++){
        $(allTr[i]).children().first().text(`${idCounter1}`)
        idCounter1++;
    }
    idCounter = idCounter1;
    idCounter1=0;
}
let validateValues = function(firstName, lastName, email){
    if (!firstName) {
        $("#error").text("Please enter first name");
        return false;
    }
    if (!firstName.match(/^[A-Z][a-z]+$/)) {
        $("#error").text("Please enter valid first name");
        return false;
    }
    if (!lastName) {
        $("#error").text("Please enter last name");
        return false;
    }
    if (!lastName.match(/^[A-Z][a-z]+$/)) {
        $("#error").text("Please enter valid last name");
        return false;
    }
    if (!email) {
        $("#error").text("Please enter email");
        return false;
    }
    if (!email.match(/^\w(\w|\.)*@\w+\.\w+$/)) {
        $("#error").text("Please enter a valid email");
        return false;
    }
    $("#error").text("");
    return true;
  };