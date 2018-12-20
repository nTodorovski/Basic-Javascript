$(document).mousemove(function(event){
    $("span").text(event.pageX + "px width" + ", " + event.pageY + "px height");
});

$("#firstName")
    .on("focus",function(event){
        let result = $(event.target).val();
        $("#result").text(result);

    })
    .on("blur",function(event){
        $("#result").text("");
    })
$("#lastName")
    .on("focus",function(event){
        let result = $(event.target).val();
        $("#result").text(result);

    })
    .on("blur",function(event){
        $("#result").text("");
    })
    

let paragraph = $(`<p id="fadingOut">`).text("If you the button i will fade out.").css("font-size","20px");
$("body").append(paragraph);
$("body").append(`<button id="fadeOut">Fade Out</button><br><br>`);
$("#fadeOut").click(function(){
    $("#fadingOut").fadeTo(500, 0.4);
})

let div1 = $(`<div>I am Div 1</div>`);
let div2 = $(`<div>I am Div 2</div>`);
let div3 = $(`<div>I am Div 3</div>`);
$("body").append(div1,div2,div3);
$("body").append(`<br><button id="showHide">Hide Divs</button>`);
let showing = true;
$("#showHide").click(function(){
    if(showing){
        div1.hide();
        div2.hide();
        div3.hide();
        $("#showHide").text("Show Divs");
    }else{
        div1.show();
        div2.show();
        div3.show();
        $("#showHide").text("Hide Divs");
    }
    showing = !showing;
})


let div = $(`<br><br><br><br><br><div id="change" style="width:400px; height:400px; background-color:red;color:white;font-size:30px;">I will change my position when u hover me</div>`);
$("body").append(div);
$("#change").hover(hoverOn,hoverOff);
function hoverOn(){
    $("#change").css("margin-top","40px");
    $("#change").css("margin-left","40px");
}
function hoverOff(){
    $("#change").css("margin-top","0px");
    $("#change").css("margin-left","0px");
}

let counter = 0;

$("#register").click(function(){
    if($("#firstName1").val() == "" || $("#lastName1").val() == "" || $("#password").val() == "" || $("#email").val() == ""){
        $("#error").text("All fields are required to register a User!");
    } else{
        let firstName = $("#firstName1").val();
        let lastName = $("#lastName1").val();
        let email = $("#email").val();
        let password = $("#password").val();
        $("tbody").append($(`<tr id="${counter}"></tr>`));
        $(`#${counter}`).append(`<td>${firstName}</td><td>${lastName}</td><td>${password}</td><td>${email}</td>`);
        counter++;
        $("#firstName1").val("");
        $("#lastName1").val("");
        $("#email").val("");
        $("#password").val("");
        $("#error").text("");
    }
})
