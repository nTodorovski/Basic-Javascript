let book = {
    title: "Zoki Poki",
    author: "Olivera Nikolova",
    readingStatus: "readingStatus",
    readingStatusInfo: function () {
        let paragraph = document.getElementById("paragraph1");
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

let paragraph2 = document.getElementById("paragraph2");
paragraph2.innerHTML = `Book: ${book.title} by ${book.author}.`;

let button1 = document.getElementById("button1");
button1.addEventListener("click",function info(){
    let clear = document.getElementById("paragraph1");
    clear.innerHTML = "";
    book.readingStatus = true;
    book.readingStatusInfo();
});
let button2 = document.getElementById("button2");
button2.addEventListener("click",function info(){
    let clear = document.getElementById("paragraph1");
    clear.innerHTML = "";
    book.readingStatus = false;
    book.readingStatusInfo();
});