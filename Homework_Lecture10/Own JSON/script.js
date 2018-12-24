$("button").click(function(){
    $.ajax({
        url: "https://raw.githubusercontent.com/nTodorovski/Javascript_Homework/master/Nikola_Todorovski.json",
        success: function(response){
            let result = JSON.parse(response);
            console.log(result);
            $("#1").text(`${result.firstName} ${result.lastName} ${result.age}yr.`);
            $("#2").append("My hobbies are:");
            for(i=0;i<result.hobbies.length;i++){
                if(i === result.hobbies.length-1){
                    $("#2").append(` ${result.hobbies[i]}.`);
                }else {
                    $("#2").append(`${result.hobbies[i]},`);
                } 
            }
            $("<p>").text("My best friend is:").appendTo("body");
            $("<p>").text(`${result.bestFriend.firstName} ${result.bestFriend.lastName} ${result.bestFriend.age}yr.`).appendTo("body");
        },
        error: function(response){
            console.log("The request has failed!");
            console.log(response.responseText);
        }
    })
})