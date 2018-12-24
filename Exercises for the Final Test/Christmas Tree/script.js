$("#enter").click(drawChristmasTree);

function drawChristmasTree(number){
    $("#tree").text("");
    number = $("#rows").val();
    let number1 = Number(number);
    let arr = "";
    for(i=1; i<=number1; i++){ 
        for(j=i; j<number1; j++)
        {   
            arr = " "+arr+" ";
        }
        for(j=1; j<=(2*i-1); j++)
        {   
            arr=arr+"*";
        }
        $(`<p>`).text(`${arr}`).appendTo("#tree");
        arr = [];
    }
    let karakteri = 1+((number1-1)*2);
    let arr1 = "";
    let arSredina = parseInt(karakteri/2)+1;
    for(k=0;k<karakteri;k++){
        if(k === arSredina-1){
            arr1 = arr1+"*";
        } else{
            arr1 = " " +arr1; 
        }
    }
    $(`<p>`).text(arr1).appendTo("#tree");
    $(`<p>`).text(arr1).appendTo("#tree");
}