let book = {
    title: "title",
    author: "author",
    readingStatus: "readingStatus",
    readingStatusInfo: function () {
        let paragraph = document.createElement("p");
        paragraph.style.fontSize = "25px";
        let body = document.getElementsByTagName("body")[0];
        if(this.readingStatus === true){
            paragraph.innerHTML = `Already read '${this.title}' by ${this.author}.`;
            body.appendChild(paragraph);
        } else if(this.readingStatus === false){
            paragraph.innerHTML = `You still need to read '${this.title}' by ${this.author}.`;
            body.appendChild(paragraph);
        }
    }
}

let paragraph1 = document.getElementById("paragraph1");
paragraph1.innerHTML = "Book: Zoki Poki by Olivera Nikolova.";

let paragraph2 = document.getElementById("paragraph2");
paragraph2.innerHTML = "Book: Vtorata Smena by Velko Nedelkovski.";

let paragraph3 = document.getElementById("paragraph3");
paragraph3.innerHTML = "Book: Marta by Gorjan Petrevski.";


let button1 = document.getElementById("button1");
button1.addEventListener("click",function info(){
    book.readingStatus = true;
    book.title = "Zoki Poki";
    book.author = "Olivera Nikolova";
    book.readingStatusInfo();
});
let button2 = document.getElementById("button2");
button2.addEventListener("click",function info(){
    book.readingStatus = false;
    book.title = "Zoki Poki";
    book.author = "Olivera Nikolova";
    book.readingStatusInfo();
});

let button3 = document.getElementById("button3");
button3.addEventListener("click",function info(){
    book.readingStatus = true;
    book.title = "Vtorata Smena";
    book.author = "Velko Nedelkovski";
    book.readingStatusInfo();
});

let button4 = document.getElementById("button4");
button4.addEventListener("click",function info(){
    book.readingStatus = false;
    book.title = "Vtorata Smena";
    book.author = "Velko Nedelkovski";
    book.readingStatusInfo();
});

let button5 = document.getElementById("button5");
button5.addEventListener("click",function info(){
    book.readingStatus = true;
    book.title = "Marta";
    book.author = "Gorjan Petrevski";
    book.readingStatusInfo();
});

let button6 = document.getElementById("button6");
button6.addEventListener("click",function info(){
    book.readingStatus = false;
    book.title = "Marta";
    book.author = "Gorjan Petrevski";
    book.readingStatusInfo();
});
