let arr1 = []; 
let arr2; 
let arr3; 
let arr4; 
let arr5; 
let counter = 1; // broj na operatori
let result = []; // array za regex matchovite
let operators = []; // array na operatorite
let sum = 0; // sumata od presmetkite
let input; // oddelno sekoj match od regex
let flag; // pomosna variabla za da znam sto da pokazuva na ekran 

$("button").click(function(event){
    if(event.target.value === "all-clear"){
        clear();
        $(".calculator-screen").val(arr3);
    }else if(event.target.value !== "all-clear"){
        arr1.push(event.target.value); // array vo koj gi sobiram site klikovi na kalkulatorot
        arr3 = arr1.join(""); // string od arr1
        $(".calculator-screen").val(arr3);
    }

    if(event.target.value === "="){
        arr2 = arr1.join(""); // string od arr1
        if(arr2.charAt(0) === "+" || arr2.charAt(0) === "-" || arr2.charAt(0) === "*" || arr2.charAt(0) === "/" || arr2.charAt(0) === "="){
            $(".calculator-screen").val("ERROR");
            return;
        } else{
            arr4 = arr1;

            checkBugs();

            if(checkBugs() === 1){
                $(".calculator-screen").val("ERROR");
                return;
            }

            arr5 = arr4; // arr5 e iscisten array od arr1 od dupli operatori
            arr4 = arr4.join(""); // string od arr4

            $(".calculator-screen").val(arr4);

            for(i=0;i<arr5.length;i++){
                if(arr5[i] === "+" || arr5[i] === "-" || arr5[i] === "*" || arr5[i] === "/"){
                    counter++;
                }
            }

            seperate();
    
            operators.pop();
    
            if(operators.length === 1){
                oneOperator();
            }else{

                mulOrDiv();
        
                calculate();
            }
        if(flag === 0){
            arr3 = arr3+sum;
            $(".calculator-screen").val(arr3);
        } else{
            arr5 = arr5.join("");
            arr5 = arr5+sum;
            $(".calculator-screen").val(arr5);
        }
        clear();
        }
    }
});

function oneOperator(){ // funkcija za ako imame samo eden operator
    for(j=0;j<operators.length;j++){
        if(operators[j] === "+"){
            sum = result[0]+result[1];
        }
        if(operators[j] === "-"){
            sum = result[0]-result[1];
        }
        if(operators[j] === "*"){
            sum = result[0]*result[1];
        }
        if(operators[j] === "/"){
            sum = result[0]/result[1];
        }
    }
}

function mulOrDiv(){ // funkcija za prvo da gi pomnozi ili podeli broevite
    for(j=0;j<operators.length;j++){
        if(operators[j] === "*"){
            result[j] = result[j]*result[j+1];
            result.splice(j+1,1);
            operators.splice(j,1);
        }
        if(operators[j] === "/"){
            result[j] = result[j]/result[j+1];
            result.splice(j+1,1);
            operators.splice(j,1);
        }
    }
}

function calculate(){ // funkcija koja gi pravi presmetkite pomegju borevite
    for(k=0;k<operators.length;k++){
        if(operators[k] === "+"){
            sum = result[0]+result[1];
            result.splice(1,1);
            result[0]=sum;
        }
        if(operators[k] === "-"){
            sum = result[0]-result[1];
            result.splice(1,1);
            result[0]=sum;
        }
        if(operators[k] === "*"){
            sum = result[0]*result[1];
            result.splice(1,1);
            result[0]=sum;
        }
        if(operators[k] === "/"){
            sum = result[0]/result[1];
            result.splice(1,1);
            result[0]=sum;
        }
    }
}

function clear(){ // gi setira na pocetno nivo site parametri
    sum=0;
    counter = 1;
    result = [];
    operators = [];
    arr1 = [];
    arr2 = [];
    arr3 = 0;
    arr4 = [];
    arr5 = [];
    flag = 0;
    input = '';
}

function checkBugs(){ // proveruva dali imame poveke operatori eden po drug (isti ili razlicni) i gi krati ili dava error
    for(i=0;i<arr2.length;i++){
        if(arr4[i] === "+"){
            if(arr4[i+1] === "+"){
                flag = 1;
                arr4.splice(i,1);
                i--;
            }else if(arr4[i+1] === "-" || arr4[i+1] === "/" || arr4[i+1] === "*"){
                $(".calculator-screen").val("ERROR");
                return 1;
            }
        } else if(arr4[i] === "-"){
            if(arr4[i+1] === "-"){
                flag = 1;
                arr4.splice(i,1);
                i--;
            }else if(arr4[i+1] === "+" || arr4[i+1] === "/" || arr4[i+1] === "*"){
                $(".calculator-screen").val("ERROR");
                return 1;
            }
        } else if(arr4[i] === "*"){
            if(arr4[i+1] === "*"){
                flag = 1;
                arr4.splice(i,1);
                i--;
            }else if(arr4[i+1] === "+" || arr4[i+1] === "/" || arr4[i+1] === "-"){
                $(".calculator-screen").val("ERROR");
                return 1;
            }
        } else if(arr4[i] === "/"){
            if(arr4[i+1] === "/"){
                flag = 1;
                arr4.splice(i,1);
                i--;
            }else if(arr4[i+1] === "+" || arr4[i+1] === "*" || arr4[i+1] === "-"){
                $(".calculator-screen").val("ERROR");
                return 1;
            }
        }
    }
}

function seperate(){ // funckija koga gi stava broevite vo niza i operatorite vo druga niza
    for(i=0;i<counter;i++){
        if(i === counter-1){
            input = arr4.match(/(\d+|\d+\.\d+)\=/);
        } else{
            input = arr4.match(/(\d+|\d+\.\d+)(\+|\-|\/|\*)/);
        }
        let dolzina = input[0].length;
        operators.push(input[0].substr(input[0].length-1,1));
        let number = input[0].substr(0,input[0].length-1);
        result.push(Number(number));
        arr4 = arr4.slice(dolzina);
    }
}
