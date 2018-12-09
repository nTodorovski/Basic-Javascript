function setBook(name, author) {
    let book = {
      name: name,
      author: author,
      readingStatus:"",
      readingStatusInfo: function() {
        let paragraph = document.createElement("p");
        paragraph.style.fontSize = "25px";
        let body = document.getElementsByTagName("body")[0];
        if(this.readingStatus === true){
            paragraph.innerHTML = `Already read '${this.name}' by ${this.author}.`;
            body.appendChild(paragraph);
        } else if(this.readingStatus === false){
            paragraph.innerHTML = `You still need to read '${this.name}' by ${this.author}.`;
            body.appendChild(paragraph);
        }
      }
    };
    return book;
}

let book1 = setBook("Zoki Poki","Olivera Nikolova"); 
let book2 = setBook("Marta","Gorjan Petrevski");
let book3 = setBook("Vtorata Smena","Venko Nedelkovski");

let p1 = document.getElementById("p1");
p1.innerHTML = `Have you read this book? -${book1.name} by ${book1.author}.`;
let p2 = document.getElementById("p2");
p2.innerHTML = `Have you read this book? -${book2.name} by ${book2.author}.`;
let p3 = document.getElementById("p3");
p3.innerHTML = `Have you read this book? -${book3.name} by ${book3.author}.`;


let button1 = document.getElementById("button1");
button1.addEventListener("click",function info(){
    book1.readingStatus = true;
    book1.readingStatusInfo();
});
let button2 = document.getElementById("button2");
button2.addEventListener("click",function info(){
    book1.readingStatus = false;
    book1.readingStatusInfo();
});
let button3 = document.getElementById("button3");
button3.addEventListener("click",function info(){
    book2.readingStatus = true;
    book2.readingStatusInfo();
});
let button4 = document.getElementById("button4");
button4.addEventListener("click",function info(){
    book2.readingStatus = false;
    book2.readingStatusInfo();
});
let button5 = document.getElementById("button5");
button5.addEventListener("click",function info(){
    book3.readingStatus = true;
    book3.readingStatusInfo();
});
let button6 = document.getElementById("button6");
button6.addEventListener("click",function info(){
    book3.readingStatus = false;
    book3.readingStatusInfo();
});
