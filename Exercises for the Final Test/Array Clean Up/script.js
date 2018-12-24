let ar = [];
$("#enter").click(function(){
    let string1 = $("#array").val();
    ar = string1.split(" ");
    for(i=0;i<ar.length;i++){
        if(ar[i] === "NaN"){
            ar[i] = parseInt(ar[i]);
        }
        if(ar[i] === "null"){
            ar[i] = null;
        }
        if(ar[i] === "undefined"){
            ar[i] = undefined;
        }
    }
    $("#div").text(cleaning(ar));
})

let arr = [1, NaN, 2, [3, NaN, 5] ];
let arr2= [NaN, 0, 15, false, -22, '',undefined, 47, null];
let newArr = [];
let arr1 = [];
let counter = 0;

function cleaning(arr){
    for(i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
                if(!isNaN(arr[i]) && arr[i] !== undefined && arr[i] !== null && arr[i] !== ""){
                    newArr.push(arr[i]);
                }
        } else if(Array.isArray(arr[i])){
            for(j=0;j<arr[i].length;j++){
                if(!isNaN(arr[i][j]) && arr[i][j] !== undefined && arr[i][j] !== null && arr[i][j] !== ""){
                    arr1.push(arr[i][j]);
                }
            }
            newArr.push(`[${arr1}]`);
        }
    }
    let newArr1 = newArr;
    newArr = [];
    arr1 = [];
    if(counter<2){
    $("<div>").text(`The Output of example ${counter+1} is ${newArr1}`).appendTo("body");
    }
    $("<br>").appendTo("body");
    counter++;
    return newArr1;
};
cleaning(arr);
cleaning(arr2);
