$("#enter").click(generateRange);
let arr = [];
function generateRange(start,end){
    arr = [];
    start = $("#starting").val();
    end = $("#ending").val();
    let first = Number(start);
    let first1 = first;
    let last = Number(end);
    let last1 = last;
    if(first<last){
        for(i=0;i<(last-first+1);i++){
            arr.push(first1);
            first1++;
        }
        $("#array").text(`The array is: ${arr}.`).appendTo("body");
    } else{
        for(i=(first-last+1);i>0;i--){
            arr.push(first1);
            first1--;
        }
        $("#array").text(`The array is: ${arr}.`).appendTo("body");
    }
    $("#starting").val("");
    $("#ending").val("");
}