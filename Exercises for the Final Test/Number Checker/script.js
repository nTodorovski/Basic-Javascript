let numberStats = {
    numDigits: 0,
    isEven: "",
    isPositive: ""
};

$("#enter").click(getNumberStats);

function getNumberStats(number){
    number = $("#number").val();
    number2 = Number(number);
    if(Number.isNaN(number2)){
        $("#error").css({"border":"2px solid red","color":"red","width":"300px"});
        $("#error").text("Please enter valid number");
    }else{
        if((Math.sign(number2) === -1) || (Math.sign(number2) === -0)){
            let number1 = number.substr(1);
            numberStats.numDigits = number1.toString().length;
        } else{
            numberStats.numDigits = number.toString().length;
        }
    
        if(number%2 == 0){
            numberStats.isEven = "even";
        }else{
            numberStats.isEven = "odd";
        }
    
        if((Math.sign(number) === -1) || (Math.sign(number) === -0)){
            numberStats.isPositive = "negative";
        } else if((Math.sign(number) === 1) || (Math.sign(number) === 0)){
            numberStats.isPositive = "positive";
        }
        $("#error").css({"border":"2px solid red","color":"red","width":"640px"});
        $("#error").text(`The number has ${numberStats.numDigits} digits, it is ${numberStats.isEven} and it is ${numberStats.isPositive}.`).appendTo("body");
    } 
}