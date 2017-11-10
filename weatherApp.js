/**
 * A function to handle the APIXU GET requesting
 *
 **/
function getRequestObject() {
    if (window.XMLHttpRequest) {
        return(new XMLHttpRequest());
    } else {
        return(null);
    }
}

/**
 * A function to handle the APIXU call for the current selectable city current weather
 *
 **/
function selectableCurrent() {
    var request = getRequestObject();
    request.onreadystatechange =
        function() { selectableRow(request); }
    var address = "http://api.apixu.com/v1/current.json?key=e46ca165aaac44bcb42225157162211&q=Phoenix";
    request.open("GET", address, true);
    request.send(null);
}

/**
 * A function to handle the APIXU call for a particular city's forecast weather
 *
 * @param address       The APIXU current weather address
 *
 **/
function ajaxCurrent(address) {
    var request = getRequestObject();

    request.onreadystatechange =
        function() { showCurrent(request); };
    request.open("GET", address, true);
    request.send(null);
}

/**
 * A function to create the initial HTML table for storing the current weather data for the cities
 *
 **/
function createTable(){

    var table = document.createElement('table');

    var heading = document.createElement('H1');

    heading.id = "heading";

    document.head.appendChild(heading);

    table.setAttribute("border", "2");

    table.setAttribute("id", "table");

    var THead = table.createTHead();
    var row = THead.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = "City";
    cell2.innerHTML = "Last Updated";
    cell3.innerHTML = "Current Temperature (Farenheit)";
    cell4.innerHTML = "Current Humidity (Percent)";
    cell5.innerHTML = "Current Wind Speed (mph)";
    cell6.innerHTML = "Current Conditions";

    document.body.appendChild(table);
}

/**
 * A function to display the current weather data for a particular city
 * @param request        The AJAX request to APIXU, contains readable returned data
 *
 **/
function showCurrent(request) {
    if ((request.readyState === 4) &&
        (request.status === 200)) {

        var jsonWeather = JSON.parse(request.responseText);

        var cityString = JSON.stringify(jsonWeather.location.name);
        var lastUpdatedString = JSON.stringify(jsonWeather.current.last_updated_epoch);
        var currentTempString = JSON.stringify(jsonWeather.current.temp_f);
        var currentHumidString = JSON.stringify(jsonWeather.current.humidity);
        var currentWindString = JSON.stringify(jsonWeather.current.wind_mph);
        var currentCondString = JSON.stringify(jsonWeather.current.condition.text);

        var lastUpdatedInt = parseInt(lastUpdatedString);
        var updatedDate = new Date(0);
        updatedDate.setUTCSeconds(lastUpdatedInt);
        var lastUpdated = updatedDate.toDateString() + " " + updatedDate.toTimeString();
        var n = lastUpdated.indexOf("G");
        var tempString = lastUpdated.slice(n, lastUpdated.length);
        lastUpdated = lastUpdated.replace(tempString, "");

        forecastB = document.createElement("BUTTON");
        var city = cityString.replace(/\"/g, "");
        forecastB.setAttribute("onclick", 'ajaxForecast("' + city + '")');
        //forecastB.setAttribute("value", "Forecast");
        forecastB.innerHTML = 'Forecast';

        if(city == "Phoenix"){
            var trPh = document.createElement('tr');
            trPh.setAttribute("id", "trPh");

            var td1Ph = document.createElement('td');
            var td2Ph = document.createElement('td');
            var td3Ph = document.createElement('td');
            var td4Ph = document.createElement('td');
            var td5Ph = document.createElement('td');
            var td6Ph = document.createElement('td');

            cityString = cityString.replace(/\"/g, "");
            var text1 = document.createTextNode(cityString);
            var text2 = document.createTextNode(lastUpdated);
            var text3 = document.createTextNode(currentTempString);
            var text4 = document.createTextNode(currentHumidString);
            var text5 = document.createTextNode(currentWindString);
            var text6 = document.createTextNode(currentCondString);

            td1Ph.appendChild(text1);
            td1Ph.setAttribute("id", "td1Ph");
            td1Ph.appendChild(forecastB);
            td2Ph.appendChild(text2);
            td2Ph.setAttribute("id", "td2Ph");
            td3Ph.appendChild(text3);
            td3Ph.setAttribute("id", "td3Ph");
            td4Ph.appendChild(text4);
            td4Ph.setAttribute("id", "td4Ph");
            td5Ph.appendChild(text5);
            td5Ph.setAttribute("id", "td5Ph");
            td6Ph.appendChild(text6);
            td6Ph.setAttribute("id", "td6Ph");

            trPh.appendChild(td1Ph);
            trPh.appendChild(td2Ph);
            trPh.appendChild(td3Ph);
            trPh.appendChild(td4Ph);
            trPh.appendChild(td5Ph);
            trPh.appendChild(td6Ph);

            document.getElementById("table").insertBefore(trPh, document.getElementById("table").firstChild);
        }
        if(city == "Paris"){
            var trPa  = document.createElement('tr');
            trPa.setAttribute("id", "trPa");

            var td1Pa = document.createElement('td');
            var td2Pa = document.createElement('td');
            var td3Pa = document.createElement('td');
            var td4Pa = document.createElement('td');
            var td5Pa = document.createElement('td');
            var td6Pa = document.createElement('td');

            cityString = cityString.replace(/\"/g, "");
            var text1 = document.createTextNode(cityString);
            var text2 = document.createTextNode(lastUpdated);
            var text3 = document.createTextNode(currentTempString);
            var text4 = document.createTextNode(currentHumidString);
            var text5 = document.createTextNode(currentWindString);
            var text6 = document.createTextNode(currentCondString);

            td1Pa.appendChild(text1);
            td1Pa.setAttribute("id", "td1Pa");
            td1Pa.appendChild(forecastB);
            td2Pa.appendChild(text2);
            td2Pa.setAttribute("id", "td2Pa");
            td3Pa.appendChild(text3);
            td3Pa.setAttribute("id", "td3Pa");
            td4Pa.appendChild(text4);
            td4Pa.setAttribute("id", "td4Pa");
            td5Pa.appendChild(text5);
            td5Pa.setAttribute("id", "td5Pa");
            td6Pa.appendChild(text6);
            td6Pa.setAttribute("id", "td6Pa");

            trPa.appendChild(td1Pa);
            trPa.appendChild(td2Pa);
            trPa.appendChild(td3Pa);
            trPa.appendChild(td4Pa);
            trPa.appendChild(td5Pa);
            trPa.appendChild(td6Pa);

            var trS = document.getElementById("trS");
            if(trS !== undefined){
                document.getElementById("table").appendBefore(trPa, trS);
            }
            else{
                document.getElementById("table").appendChild(trPa);
            }


        }

        headerDisplay();
    }else if(request.status !== 0 && request.status !== 200){
        alert("Unable to Process Request: " + request.status);
    }
}

/**
 * A function to build the selectable city row of the current weather table
 * @param request        The AJAX request to APIXU, contains readable returned data
 *
 **/
function selectableRow(request) {
    if ((request.readyState === 4) &&
        (request.status === 200)) {

        var trS = document.createElement('tr');
        trS.setAttribute("id", "trS");

        var td1S = document.createElement('td');
        var td2S = document.createElement('td');
        var td3S = document.createElement('td');
        var td4S = document.createElement('td');
        var td5S = document.createElement('td');
        var td6S = document.createElement('td');

        //var text1 = document.createTextNode(cityString);
        var text2 = document.createTextNode("");
        var text3 = document.createTextNode("");
        var text4 = document.createTextNode("");
        var text5 = document.createTextNode("");
        var text6 = document.createTextNode("");

        var selectable = document.createElement("SELECT");
        selectable.setAttribute("id", "selectable");
        selectable.setAttribute("onchange", 'ajaxCurrentSelect(document.getElementById("selectable").value)');

        var option1 = document.createElement("option");
        var option2 = document.createElement("option");
        var option3 = document.createElement("option");
        var option4 = document.createElement("option");
        var option5 = document.createElement("option");

        option1.innerHTML = "Chicago";
        option2.innerHTML = "New York";
        option3.innerHTML = "Montreal";
        option4.innerHTML = "Sao Paulo";
        option5.innerHTML = "London";

        option1.value = "Chicago";
        option2.value = "New_York";
        option3.value = "Montreal";
        option4.value = "Sao_Paulo";
        option5.value = "London";

        selectable.appendChild(option1);
        selectable.appendChild(option2);
        selectable.appendChild(option3);
        selectable.appendChild(option4);
        selectable.appendChild(option5);

        forecastB = document.createElement("BUTTON");
        forecastB.setAttribute("onclick", 'ajaxForecast(document.getElementById("selectable").value)');
        //forecastB.setAttribute("value", "Forecast");
        forecastB.innerHTML = 'Forecast';

        td1S.appendChild(selectable);
        td1S.appendChild(forecastB);
        td2S.appendChild(text2);
        td2S.setAttribute("id", "td2S");
        td3S.appendChild(text3);
        td3S.setAttribute("id", "td3S");
        td4S.appendChild(text4);
        td4S.setAttribute("id", "td4S");
        td5S.appendChild(text5);
        td5S.setAttribute("id", "td5S");
        td6S.appendChild(text6);
        td6S.setAttribute("id", "td6S");

        trS.appendChild(td1S);
        trS.appendChild(td2S);
        trS.appendChild(td3S);
        trS.appendChild(td4S);
        trS.appendChild(td5S);
        trS.appendChild(td6S);

        document.getElementById("table").appendChild(trS);
    }else if(request.status != 0 && request.status != 200){
        alert("Unable to Process Request: " + request.status);
    }
}

/**
 * A function to show the current weather data, for the currently
 * selected city in the third row of the current weather table
 *
 * @param request        The AJAX request to APIXU, contains readable returned data
 **/
function showCurrentSelect(request) {
    if ((request.readyState === 4) &&
        (request.status === 200)) {

        var jsonWeather = JSON.parse(request.responseText);

        var lastUpdatedString = JSON.stringify(jsonWeather.current.last_updated_epoch);
        var currentTempString = JSON.stringify(jsonWeather.current.temp_f);
        var currentHumidString = JSON.stringify(jsonWeather.current.humidity);
        var currentWindString = JSON.stringify(jsonWeather.current.wind_mph);
        var currentCondString = JSON.stringify(jsonWeather.current.condition.text);

        var lastUpdatedInt = parseInt(lastUpdatedString);
        var updatedDate = new Date(0);
        updatedDate.setUTCSeconds(lastUpdatedInt);
        var lastUpdated = updatedDate.toDateString() + " " + updatedDate.toTimeString();
        var n = lastUpdated.indexOf("G");
        var tempString = lastUpdated.slice(n, lastUpdated.length);
        lastUpdated = lastUpdated.replace(tempString, "");

        var trS = document.getElementById("trS");

        var td2SNew = document.createElement('td');
        var td3SNew = document.createElement('td');
        var td4SNew = document.createElement('td');
        var td5SNew = document.createElement('td');
        var td6SNew = document.createElement('td');

        var text2 = document.createTextNode(lastUpdated);
        var text3 = document.createTextNode(currentTempString);
        var text4 = document.createTextNode(currentHumidString);
        var text5 = document.createTextNode(currentWindString);
        var text6 = document.createTextNode(currentCondString);

        td2SNew.appendChild(text2);
        td2SNew.setAttribute("id", "td2S");
        td3SNew.appendChild(text3);
        td3SNew.setAttribute("id", "td3S");
        td4SNew.appendChild(text4);
        td4SNew.setAttribute("id", "td4S");
        td5SNew.appendChild(text5);
        td5SNew.setAttribute("id", "td5S");
        td6SNew.appendChild(text6);
        td6SNew.setAttribute("id", "td6S");

        trS.replaceChild(td2SNew, td2S);
        trS.replaceChild(td3SNew, td3S);
        trS.replaceChild(td4SNew, td4S);
        trS.replaceChild(td5SNew, td5S);
        trS.replaceChild(td6SNew, td6S);

        document.getElementById("table").appendChild(trS);

        headerDisplay();
    }else if(request.status != 0 && request.status != 200){
        alert("Unable to Process Request: " + request.status);
    }
}

/**
 * A function to display the header data for the average temperature, the hottest city
 * and the nicest city
 *
 **/
function headerDisplay(){

}