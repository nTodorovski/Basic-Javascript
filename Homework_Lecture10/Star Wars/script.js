let highest = "";
let heaviest = "";
function getName(msg){
    highest = msg;
}
function getName1(msg){
    heaviest = msg;
}

$("button").click(function(){
    $.ajax({
        url: "https://swapi.co/api/people/?format=json",
        success: function(response){
            let people = response;
            let max = 0;
            let max1 = 0;
            for(i=0;i<people.results.length;i++){
                let height = Number(people.results[i].height);
                let weight = Number(people.results[i].mass);
                if(weight > max1){
                    max1 = people.results[i].mass;
                    getName1(people.results[i].name);
                }
                if(height > max){
                    max = people.results[i].height;
                    getName(people.results[i].name);
                }
                let table = $("tbody");
                table.append(`<tr>
                <td>${people.results[i].name}</td>
                <td>${people.results[i].height}cm</td>
                <td>${people.results[i].mass}kg</td>
                </tr>`)
            }
            $("<p>").text(`The tallest person is ${highest}. He is ${max}cm tall.`).appendTo("body");
            $("<p>").text(`The heaviest person is ${heaviest}. He weighs ${max1}kg.`).appendTo("body");
        },
        error: function(response){
            console.log("The request failed!");
            console.log(response.responseText);
        }
    });
});