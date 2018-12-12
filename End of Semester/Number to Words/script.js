let edinici = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
let desetki = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];


let button = document.getElementById("button1");
button.addEventListener("click",function (){
    if(document.getElementById("div1")){
        let body = document.getElementsByTagName("body")[0];
        let picture1 = document.getElementById("div1");
        body.removeChild(picture1);
    }
    let input1 = document.getElementById("input1").value;
    let value1 = Number(input1);
    let input2 = document.getElementById("input2");
    if(Number.isNaN(value1)){
        input2.value = "You entered invalid number.\nPlease try again.";
    } else if(input1 === null || input1 === ""){
        input2.value = "User didn't enter a value.";
    }  else{
        let result = toWords(input1);
        input2.value = `${result}`;
        let picture = document.createElement("div");
        picture.id = "div1";
        picture.innerHTML = `<br /><iframe src="https://giphy.com/embed/12NUbkX6p4xOO4" width="480" height="440" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`;
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(picture);
    }
})
function toWords(broj)
{
    let bukvi = ""; 

    if(broj >= 0 && broj <= 19){
        let broj1 = broj % 100;
        bukvi = edinici[broj1];
    } else if(broj >= 20 && broj <= 99){
        prvaCifra = Math.floor(broj / 10); // ja zimam prvata cifra

        bukvi = desetki[prvaCifra]; // ako vtorata cifra e 0 togas "bukvi" ke mi bide polna desetka

        vtorDel = broj % 10; // zemi ja vtorata cifra
        if (vtorDel > 0){ 
            bukvi = bukvi + " " + toWords(vtorDel); // ako e vtorata cifra e pogolema od 0 togas izvrsi ja povtorno funkcijata od pocetok za taa cifra.
        } // na ovoj princip ke se svede celiot kod nadole
    } else if(broj >= 100 && broj <= 999){
        prvaCifra = Math.floor(broj / 100);
        vtorDel = broj % 100;

        bukvi = edinici[prvaCifra] + " " + "hundred";
        
        if(vtorDel > 0){
            bukvi = bukvi + " " + "and" + " " + toWords(vtorDel);
        }
    } else if(broj >= 1000 && broj <= 19999){
        prvDel = Math.floor(broj / 1000);

        bukvi =edinici[prvDel] + " " + "thousand";
        
        vtorDel = broj % 1000;
        if(vtorDel > 0 && vtorDel <= 99){
            bukvi = bukvi + " " + "and" + " " + toWords(vtorDel);
        } else if(vtorDel >= 100){
            bukvi = bukvi + " " + "and" + " " + toWords(vtorDel);
        }
    } else if(broj >= 20000 && broj <= 999999){
        prvDel = Math.floor(broj / 1000);

        bukvi = toWords(prvDel) + " " + "thousand";

        vtorDel = broj % 1000;
        if(vtorDel > 0 && vtorDel <= 99){
            bukvi = bukvi + " " + "and" + " " + toWords(vtorDel);
        } else if(vtorDel >= 100){
            bukvi = bukvi + " " + toWords(vtorDel);
        }
    } else if (broj >= 1000000 && broj <=19999999){
        prvDel = Math.floor(broj / 1000000);

        bukvi = edinici[prvDel] + " " + "million";

        vtorDel = broj % 1000000;
        if(vtorDel > 0){
            console.log(vtorDel);
            if(vtorDel>0 && vtorDel<1000)
            bukvi = bukvi + " " + "and" + " " + toWords(vtorDel);
            else{
                bukvi = bukvi + " " + toWords(vtorDel);
            }
        }
    } else if(broj >= 20000000 && broj <=999999999){
        prvDel = Math.floor(broj / 1000000);

        bukvi = toWords(prvDel) + " " + "million";

        vtorDel = broj % 1000000;
        if(vtorDel > 0){
            bukvi = bukvi + " " + toWords(vtorDel);
        }
    } else if(broj === 1000000000){
        bukvi = "One billion";
    }
    return bukvi;
}
