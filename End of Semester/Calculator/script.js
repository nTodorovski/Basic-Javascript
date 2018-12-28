let arr1 = [];

let arr2;

let arr3;

let counter = 1;

let result = [];

let operators = [];

let sum = 0;

let input;

$("button").click(function(event){
    if(event.target.value === "all-clear"){
        sum=0;
        counter = 1;
        result = [];
        operators = [];
        arr1 = [];
        arr2 = [];
        arr3 = 0;
        $(".calculator-screen").val(arr3);
    }else if(event.target.value !== "all-clear"){
        arr1.push(event.target.value);
        arr3 = arr1.join("");
        $(".calculator-screen").val(arr3);
    }

    if(event.target.value === "+" || event.target.value === "-" || event.target.value === "*" || event.target.value === "/"){
        counter++;
    }
    if(event.target.value === "="){
        arr2 = arr1.join("");
        for(i=0;i<counter;i++){
            if(i === counter-1){
                input = arr2.match(/(\d+|\d+\.\d+)\=/);
            } else{
                input = arr2.match(/(\d+|\d+\.\d+)(\+|\-|\/|\*)/);
            }
            let dolzina = input[0].length;
            operators.push(input[0].substr(input[0].length-1,1));
            let number = input[0].substr(0,input[0].length-1);
            result.push(Number(number));
            arr2 = arr2.slice(dolzina);
        }

        operators.pop();

        if(operators.length === 1){
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
        }else{
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

        arr3 = arr3+sum;
        $(".calculator-screen").val(arr3);
        sum=0;
        counter = 1;
        result = [];
        operators = [];
        arr1 = [];
        arr2 = [];
        arr3 = 0;
    }
});