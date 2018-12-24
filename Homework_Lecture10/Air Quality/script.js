$("button").click(function(){
    $.ajax({
        url: "https://api.openaq.org/v1/measurements?country=MK&city=Centar+Municipality&parameter=pm10&date_from=2018-12-20&date_to=2018-12-21",
        success: function(response){
            let result = response;
            console.log(result);
            $(`<table border="2px">`).appendTo("body");
            let thead = $(`<thead>`).appendTo("table");
            thead.append(`<tr>
            <td>City / Municipality</td>
            <td>Country</td>
            <td>Local Time</td>
            <td>PM10 µg/m³</td>
            </tr>`);
            let tbody = $("<tbody>").appendTo("table");
            let sum = 0;
            for(i=0;i<result.results.length;i++){
                tbody.append(`<tr id="${i}">
                <td>${result.results[i].city}</td>
                <td>${result.results[i].country}</td>
                <td>${result.results[i].date.local}</td>
                <td>${result.results[i].value}</td>
                </tr>`);
                sum = sum + result.results[i].value;
            };
            for(i=0;i<result.results.length;i++){
                if(result.results[i].value > 44 && result.results[i].value < 88){
                    $(`#${i}`).find("td:nth-child(4n)").css("background-color","#feefa8");
                } else if(result.results[i].value > 88 && result.results[i].value < 176){
                    $(`#${i}`).find("td:nth-child(4n)").css("background-color","#f9d99a");
                } else if(result.results[i].value > 176){
                    $(`#${i}`).find("td:nth-child(4n)").css("background-color","#fbb3ae");
                }
            };
            $("<br>").appendTo("body");
            $(`<table border="2px">`).append(`<tbody>
                <tr>
                    <td>0-44</td>
                    <td>44-88</td>
                    <td>88-176</td>
                    <td>>176</td>
                </tr>
                <tr>
                    <td style="background-color:#22f42e;height:20px;"></td>
                    <td style="background-color:#feefa8;"></td>
                    <td style="background-color:#f9d99a;"></td>
                    <td style="background-color:#fbb3ae;"></td>
                </tr>
            </tbody>`).appendTo("body");

            let average = sum / result.results.length;
            $("<br>").appendTo("body");
            $(`<h1 style="color:red;font-family:Arial;">`).text(`The average of all measurments of PM10 is ${average}µg/m³.`).appendTo("body");
        },
        error: function(response){
            console.log("The request failed!");
            console.log(response.responseText);
        }
    })
});