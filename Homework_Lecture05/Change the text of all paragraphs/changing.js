let firstHeader = document.getElementById("myTitle");
firstHeader.innerText = "This is the title of the Page";

let firstParagraph = document.querySelectorAll("p.paragraph");
firstParagraph[0].innerText = "This is the homework. It's pretty easy.";


let secondParagraph = document.querySelectorAll("p.paragraph.second");
secondParagraph[0].innerText = "No really, It's easy peasy!";

let firstText = document.querySelector("div.anotherDiv");
firstText.firstElementChild.nextElementSibling.innerText = "It's about selecting parent and children elements.";


let secondHeader = document.getElementsByTagName("div");
secondHeader[2].firstElementChild.innerText = "This is now changed.";


let thirdHeader = document.getElementsByTagName("div");
thirdHeader[2].lastElementChild.innerText = "This is also changed";
