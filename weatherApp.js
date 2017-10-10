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
* A function to handle the APIXU call for the refresh of current weather for a particular city
*
* @param address       The APIXU current weather address
**/ 
function refreshRequest(address) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { refresh(request); }
  request.open("GET", address, true);
  request.send(null);
}

/**
* A function to handle the APIXU call for the current selectable city's refresh of current weather
*  
**/ 
function refreshSelect() {
  var request = getRequestObject();
  var city = document.getElementById("selectable").value;
  var address = "http://api.apixu.com/v1/current.json?key=e46ca165aaac44bcb42225157162211&q=" + city;
  request.onreadystatechange = 
    function() { refreshSelectCurrent(request); }
  request.open("GET", address, true);
  request.send(null);
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
* A function to handle the APIXU call for the current selectable city's forecast weather
* 
* @param city       The particular city the forecast is needed for
* 
**/ 
function ajaxCurrentSelect(city) {
	var address = "http://api.apixu.com/v1/current.json?key=e46ca165aaac44bcb42225157162211&q=" + city;
    console.log("Address: " + address);
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showCurrentSelect(request); };
  request.open("GET",  address, true);
  request.send(null);
}

/**
* A function to handle the APIXU call for a particular city's forecast weather
* 
* @param city       The particular city the forecast is needed for
* 
**/ 
function ajaxForecast(city) {
	var address = "http://api.apixu.com/v1/forecast.json?key=e46ca165aaac44bcb42225157162211&q=" + city;
    console.log("Address: " + address);
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showForecast(request); };
  request.open("GET", address, true);
  request.send(null);
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
    	if(trS != undefined){
    		document.getElementById("table").appendBefore(trPa, trS);
    	}
    	else{
    		document.getElementById("table").appendChild(trPa);
    	}

    	
    }

    

    headerDisplay();
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
* A function to show the forecast dta for a particular city
*
* @param request        The AJAX request to APIXU, contains readable returned data
* 
**/ 
function showForecast(request){
	if ((request.readyState === 4) &&
      (request.status === 200)) {

		if(document.getElementById("forecast") != undefined){
			var toRemove = document.getElementById("forecast");
			document.body.removeChild(toRemove);
		}
		if(document.getElementById("forecastDay") != undefined){
			var toRemove = document.getElementById("forecastDay");
			document.body.removeChild(toRemove);
		}
		if(document.getElementById("forecastNight") != undefined){
			var toRemove = document.getElementById("forecastNight");
			document.body.removeChild(toRemove);
		}

        var conditionText;

		var dayTemp;
		var dayCondition;
		var dayWind;
		var dayHumid;

		var nightTemp;
		var nightCondition;
		var nightWind;
		var nightHumid;

		var h = document.createElement("H3");
		var hDay = document.createElement("H3");
		var hNight = document.createElement("H3");

		h.id = "forecast";
		hDay.id = "forecastDay";
		hNight.id = "forecastNight";

		var jsonForecast = JSON.parse(request.responseText);

		var city = JSON.stringify(jsonForecast.location.name);
		city = city.replace(/\"/g, "");

		var forecastText = document.createTextNode("Forecast for: " + city);

		//console.log(JSON.stringify(jsonForecast));

		for(i in jsonForecast.forecast.forecastday[0].hour){
			if(jsonForecast.forecast.forecastday[0].hour[i].time.includes("12:00")){
				dayTemp = document.createTextNode("Temp (F): " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].temp_f));
				dayCondition = document.createTextNode(" Condition: " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].condition.text));
                conditionText = JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].condition.text);
				dayWind = document.createTextNode(" Wind Speed (MPH): " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].wind_mph));
				dayHumid = document.createTextNode(" Humidity: " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].humidity));
			}if(jsonForecast.forecast.forecastday[0].hour[i].time.includes("23:00")){
				nightTemp = document.createTextNode("Temp (F): " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].temp_f));
				nightCondition = document.createTextNode(" Condition: " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].condition.text));
				nightWind = document.createTextNode(" Wind Speed (MPH): " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].wind_mph));
				nightHumid = document.createTextNode(" Humidity: " + JSON.stringify(jsonForecast.forecast.forecastday[0].hour[i].humidity));
			}
		}

		dayTime = document.createTextNode("Day: ");
		nightTime = document.createTextNode("\n" +
			"Night: ");

		h.appendChild(forecastText);

		hDay.appendChild(dayTime);
		hDay.appendChild(dayTemp);
		hDay.appendChild(dayCondition);
		hDay.appendChild(dayWind);
		hDay.appendChild(dayHumid);

		hNight.appendChild(nightTime);
		hNight.appendChild(nightTemp);
		hNight.appendChild(nightCondition);
		hNight.appendChild(nightWind);
		hNight.appendChild(nightHumid);

		document.body.appendChild(h);
		document.body.appendChild(hDay);
		document.body.appendChild(hNight);

        conditionText = conditionText.toLowerCase();

        if(conditionText.includes("clear")){
            document.body.style.background = "url('images/clear.jpg')"
        } else if(conditionText.includes("sunny")){
            document.body.style.background = "url('images/sunny.jpg')"
        } else if(conditionText.includes("cloudy")){
            document.body.style.background = "url('images/cloudy.jpg')"
        } else if(conditionText.includes("overcast")){
            document.body.style.background = "url('images/overcast.jpg')"
        } else if(conditionText.includes("rain")){
            document.body.style.background = "url('images/rain.jpg')"
        } else if(conditionText.includes("thunder")){
            document.body.style.background = "url('images/thunder.jpg')"
        } else if(conditionText.includes("snow")){
            document.body.style.background = "url('images/snow.jpg')"
        } else {
            document.body.style.background = "url('images/default.jpg')"
        }
	}
	else if(request.status != 0 && request.status != 200){
		alert("Unable to Process Request: " + request.status);
	}
}

/**
* A function to display the header data for the average temperature, the hottest city
* and the nicest city
* 
**/ 
function headerDisplay(){

	if(document.getElementById("headerWeather1") != undefined){
			var toRemove = document.getElementById("headerWeather1");
			var header = document.getElementById("header");
			header.removeChild(toRemove);
		}
	if(document.getElementById("headerWeather2") != undefined){
			var toRemove = document.getElementById("headerWeather2");
			var header = document.getElementById("header");
			header.removeChild(toRemove);
		}

	var jsonCalculate;
	var temperatureSum = 0;
	var rowCount = 0;

	var table = document.getElementById("table");
		for (var i = 1, row; row = table.rows[i]; i++) {
   			if(jsonCalculate == undefined){
   				jsonCalculate = [{city: row.cells[0].textContent, temperature: row.cells[2].textContent, humidity: row.cells[3].textContent, windSpeed: row.cells[4].textContent}];
   				temperatureSum += parseInt(row.cells[2].textContent);
   				JSON.stringify(jsonCalculate, null, 2);
   				rowCount++;
   			}else if(i == 3 && row.cells[2].textContent != ""){
   				jsonCalculate.push({city: document.getElementById("selectable").value, temperature: row.cells[2].textContent, humidity: row.cells[3].textContent, windSpeed: row.cells[4].textContent});
   				temperatureSum += parseInt(row.cells[2].textContent);
   				rowCount++;
   			}else if(row.cells[2].textContent != ""){
   				jsonCalculate.push({city: row.cells[0].textContent, temperature: row.cells[2].textContent, humidity: row.cells[3].textContent, windSpeed: row.cells[4].textContent});
   				temperatureSum += parseInt(row.cells[2].textContent);
   				rowCount++;
   			}
		}

	var temperatureAvg = Math.floor(temperatureSum/rowCount);

	jsonCalculate.sort( predicatBy("temperature") );

	var hottestCity = jsonCalculate[0].city;


	hottestCity = hottestCity.replace(/\"/g, "");
	hottestCity = hottestCity.replace(/_/g, " ");
	hottestCity = hottestCity.replace(/Forecast/g,'');

	var nicestCity;

	for(i in jsonCalculate){
		var weatherScore;
		var score = 0;
		if(jsonCalculate[i].temperature > "60" && jsonCalculate[i].temperature < "90"){
			score++;
		}
		if(jsonCalculate[i].humidity > "40" && jsonCalculate[i].humidity < "70"){
			score++;
		}
		if(jsonCalculate[i].windSpeed > "5" && jsonCalculate[i].windSpeed < "10"){
			score++;
		}
		if(weatherScore == undefined){
   				weatherScore = [{city: jsonCalculate[i].city, score: score}];
   				JSON.stringify(weatherScore, null, 2);
   		}else{
   				weatherScore.push({city: jsonCalculate[i].city, score: score});
   		}
   		weatherScore.sort( predicatBy("score") );
   		//console.log(JSON.stringify(weatherScore));
   		nicestCity = weatherScore[0].city;
	}

	nicestCity = nicestCity.replace(/\"/g, "");
	nicestCity = nicestCity.replace(/_/g, " ");
	nicestCity = nicestCity.replace(/Forecast/g,'');


	var temperatureString = "The average temperature is: " +  temperatureAvg + "F and the hottest city is: " + hottestCity;

	var nicestString = "The city with the nicest weather is: " + nicestCity;



	var headerNode1 = document.createTextNode(temperatureString);

	var headerNode2 = document.createTextNode(nicestString);

	console.log(nicestString);

	var h1 = document.createElement("H3");

	var h2 = document.createElement("H3");

	h1.id = "headerWeather1";

	h1.appendChild(headerNode1);

	h2.id = "headerWeather2";

	h2.appendChild(headerNode2);

	var elemHead = document.getElementById("header");

	elemHead.appendChild(h1);
	elemHead.appendChild(h2);

}

/**
* A function to refresh the current weather data for the Phoenix and Paris rows
* @param request        The AJAX request to APIXU, contains readable returned data
* 
**/ 
function refresh(request) {
  if ((request.readyState === 4) &&
      (request.status === 200)) {

  	var jsonWeather = JSON.parse(request.responseText);

  	var cityString = JSON.stringify(jsonWeather.location.name);
  	var city = cityString.replace(/\"/g, "");
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

	var table = document.getElementById("table");

	var oldLastUpdatedString = "";
	var oldCurrentTempString = "";
	var oldCurrentHumidString = "";
	var oldCurrentWindString = "";

	if(city == "Phoenix"){
		oldLastUpdatedString = table.rows[1].cells[1].textContent;
		oldCurrentTempString = table.rows[1].cells[2].textContent;
		oldCurrentHumidString = table.rows[1].cells[3].textContent;
		oldCurrentWindString = table.rows[1].cells[4].textContent;
	}
	if(city == "Paris"){
		oldLastUpdatedString = table.rows[2].cells[1].textContent;
		oldCurrentTempString = table.rows[2].cells[2].textContent;
		oldCurrentHumidString = table.rows[2].cells[3].textContent;
		oldCurrentWindString = table.rows[2].cells[4].textContent;
	}

	var difference = 0;

	var n = oldLastUpdatedString.indexOf("D");
	var tempString = oldLastUpdatedString.slice(n, oldLastUpdatedString.length);
	oldLastUpdatedString = oldLastUpdatedString.replace(tempString, "");

	//console.log("oldLastUpdatedString: " + oldLastUpdatedString);

	var oldDate = new Date(oldLastUpdatedString);
	var oldEpoch = oldDate.getTime()/1000.0;
	if(lastUpdatedInt > oldEpoch){
		difference = Math.abs(lastUpdatedInt - oldEpoch);
	}

	console.log("LastUpdated: " + lastUpdatedInt);
	console.log("oldEpoch: " + oldEpoch);

	var newTemp = parseFloat(currentTempString);
	var oldTemp = parseFloat(oldCurrentTempString);

	//console.log("NewTemp: " + currentTempString);
	//console.log("OldTemp: " + oldCurrentTempString);

	var tempColor;
	var humidColor;
	var windColor;

	if(newTemp > oldTemp){
		tempColor = "Red";
	}else if(newTemp < oldTemp){
		tempColor = "Blue";
	}else if(newTemp == oldTemp){
		tempColor = "Black";
	}

	var newHumid = parseFloat(currentHumidString);
	var oldHumid = parseFloat(oldCurrentHumidString);

	//console.log("NewHumid: " + currentHumidString);
	//console.log("OldHumid: " + oldCurrentHumidString);

	if(newHumid > oldHumid){
		humidColor = "Red";
	}else if(newHumid < oldHumid){
		humidColor = "Blue";
	}else if(newHumid == oldHumid){
		humidColor = "Black";
	}

	var newWind = parseFloat(currentWindString);
	var oldWind = parseFloat(oldCurrentWindString);

	//console.log("NewWind: " + currentWindString);
	//console.log("OldWind: " + oldCurrentWindString);

	if(newWind > oldWind){
		windColor = "Red";
	}else if(newWind < oldWind){
		windColor = "Blue";
	}else if(newWind == oldWind){
		windColor = "Black";
	}

	if(city == "Phoenix"){
    	var trPh  = document.getElementById('trPh');

    	//console.log(trPh.innerHTML);

    	var td2PhNew = document.createElement('td');
    	var td3PhNew = document.createElement('td');
    	var td4PhNew = document.createElement('td');
    	var td5PhNew = document.createElement('td');
    	var td6PhNew = document.createElement('td');

    	var text2 = document.createTextNode(lastUpdated + " Delta: " + difference);
    	var text3 = document.createTextNode(currentTempString);
    	var text4 = document.createTextNode(currentHumidString);
    	var text5 = document.createTextNode(currentWindString);
    	var text6 = document.createTextNode(currentCondString);

    	td2PhNew.appendChild(text2);
    	td2PhNew.setAttribute("id", "td2Ph");
    	td3PhNew.appendChild(text3);
    	td3PhNew.setAttribute("id", "td3Ph");
    	td3PhNew.style.color = tempColor;
    	td4PhNew.appendChild(text4);
    	td4PhNew.setAttribute("id", "td4Ph");
    	td4PhNew.style.color = humidColor;
    	td5PhNew.appendChild(text5);
    	td5PhNew.setAttribute("id", "td5Ph");
    	td5PhNew.style.color = windColor;
		td6PhNew.appendChild(text6);
		td6PhNew.setAttribute("id", "td6Ph");

    	trPh.replaceChild(td2PhNew, td2Ph);
    	trPh.replaceChild(td3PhNew, td3Ph);
    	trPh.replaceChild(td4PhNew, td4Ph);
    	trPh.replaceChild(td5PhNew, td5Ph);
    	trPh.replaceChild(td6PhNew, td6Ph);

    	document.getElementById("table").insertBefore(trPh, document.getElementById("table").firstChild);

    }


    if(city == "Paris"){
    	var trPa  = document.getElementById('trPa');

    	console.log(trPa.innerHTML);

    	var td2PaNew = document.createElement('td');
    	var td3PaNew = document.createElement('td');
    	var td4PaNew = document.createElement('td');
    	var td5PaNew = document.createElement('td');
    	var td6PaNew = document.createElement('td');

    	var text2 = document.createTextNode(lastUpdated + " Delta: " + difference);
    	var text3 = document.createTextNode(currentTempString);
    	var text4 = document.createTextNode(currentHumidString);
    	var text5 = document.createTextNode(currentWindString);
    	var text6 = document.createTextNode(currentCondString);

    	td2PaNew.appendChild(text2);
    	td2PaNew.setAttribute("id", "td2Pa");
    	td3PaNew.appendChild(text3);
    	td3PaNew.setAttribute("id", "td3Pa");
    	td3PaNew.style.color = tempColor;
    	td4PaNew.appendChild(text4);
    	td4PaNew.setAttribute("id", "td4Pa");
    	td4PaNew.style.color = humidColor;
    	td5PaNew.appendChild(text5);
    	td5PaNew.setAttribute("id", "td5Pa");
    	td5PaNew.style.color = windColor;
		td6PaNew.appendChild(text6);
		td6PaNew.setAttribute("id", "td6Pa");

    	trPa.replaceChild(td2PaNew, td2Pa);
    	trPa.replaceChild(td3PaNew, td3Pa);
    	trPa.replaceChild(td4PaNew, td4Pa);
    	trPa.replaceChild(td5PaNew, td5Pa);
    	trPa.replaceChild(td6PaNew, td6Pa);

    	document.getElementById("table").insertBefore(trPa, trS);
    }
		
  }else if(request.status != 0 && request.status != 200){
		alert("Unable to Process Request: " + request.status);
	}
}


/**
* A function to refresh the current weather data for the selectable city row
* @param request        The AJAX request to APIXU, contains readable returned data
* 
**/ 
function refreshSelectCurrent(request) {
  if ((request.readyState === 4) &&
      (request.status === 200)) {

  		var jsonWeather = JSON.parse(request.responseText);

  		var table = document.getElementById("table");

  		//var cityString = document.getElementById("selectable").value;
		var lastUpdatedString;
		var currentTempString;
		var currentHumidString;
		var currentWindString;
		var currentCondString;

		var oldLastUpdatedString = table.rows[3].cells[1].textContent;
		var oldCurrentTempString = table.rows[3].cells[2].textContent;
		var oldCurrentHumidString =  table.rows[3].cells[3].textContent;
		var oldCurrentWindString = table.rows[3].cells[4].textContent;

		var text2;
		var text3;
		var text4;
		var text5;
		var text6;

    	var trS  = document.getElementById('trS');

    	var td2SNew = document.createElement('td');
    	var td3SNew = document.createElement('td');
    	var td4SNew = document.createElement('td');
    	var td5SNew = document.createElement('td');
    	var td6SNew = document.createElement('td');

    	var tempColor = "Black";
		var humidColor = "Black";
		var windColor = "Black";

		var difference = 0;


    	
    	for (var i = 1, row; row = table.rows[i]; i++) {
   			if(i == 3 && row.cells[2].textContent != ""){

   				lastUpdatedString = JSON.stringify(jsonWeather.current.last_updated_epoch);
    			currentTempString = JSON.stringify(jsonWeather.current.temp_f);
    			currentHumidString = JSON.stringify(jsonWeather.current.humidity);
    			currentWindString = JSON.stringify(jsonWeather.current.wind_mph);
    			currentCondString = JSON.stringify(jsonWeather.current.condition.text);

    			var lastUpdatedInt = parseInt(lastUpdatedString);
				var updatedDate = new Date(0);
				updatedDate.setUTCSeconds(lastUpdatedInt);	
				var lastUpdated = updatedDate.toDateString() + " " + updatedDate.toTimeString();
				var n = lastUpdated.indexOf("G");
				var tempString = lastUpdated.slice(n, lastUpdated.length);
				lastUpdated = lastUpdated.replace(tempString, "");

    			var n = oldLastUpdatedString.indexOf("D");
				var tempString = oldLastUpdatedString.slice(n, oldLastUpdatedString.length);
				oldLastUpdatedString = oldLastUpdatedString.replace(tempString, "");

				console.log("oldLastUpdatedString: " + oldLastUpdatedString);

				var oldDate = new Date(oldLastUpdatedString);
				var oldEpoch = oldDate.getTime()/1000.0;
				if(lastUpdatedInt > oldEpoch){
					difference = Math.abs(lastUpdatedInt - oldEpoch);
				}

    			text2 = document.createTextNode(lastUpdated + " Delta: " + difference);
    			text3 = document.createTextNode(currentTempString);
    			text4 = document.createTextNode(currentHumidString);
    			text5 = document.createTextNode(currentWindString);
    			text6 = document.createTextNode(currentCondString);
 			
   			}else if(i == 3 && row.cells[2].textContent == ""){
   				text2 = document.createTextNode("");
    			text3 = document.createTextNode("");
    			text4 = document.createTextNode("");
    			text5 = document.createTextNode("");
    			text6 = document.createTextNode("");
   			}
		}

		var lastUpdatedInt = parseInt(lastUpdatedString);
		var updatedDate = new Date(0);
		updatedDate.setUTCSeconds(lastUpdatedInt);	
		var lastUpdated = updatedDate.toDateString() + " " + updatedDate.toTimeString();
		var n = lastUpdated.indexOf("G");
		var tempString = lastUpdated.slice(n, lastUpdated.length);
		lastUpdated = lastUpdated.replace(tempString, "");
		
		var newTemp = parseFloat(currentTempString);
		var oldTemp = parseFloat(oldCurrentTempString);

    	if(newTemp > oldTemp && oldTemp != ""){
			tempColor = "Red";
			console.log("Temperature: " + tempColor);
		}else if(newTemp < oldTemp && oldTemp != ""){
			tempColor = "Blue";
			console.log("Temperature: " + tempColor);
		}else if(newTemp == oldTemp && oldTemp != ""){
			tempColor = "Black";
			console.log("Temperature: " + tempColor);
		}

		var newHumid = parseFloat(currentHumidString);
		var oldHumid = parseFloat(oldCurrentHumidString);

		//console.log("NewHumid: " + currentHumidString);
		//console.log("OldHumid: " + oldCurrentHumidString);

		if(newHumid > oldHumid && oldHumid != ""){
			humidColor = "Red";
			console.log("Humidity: " + humidColor);
		}else if(newHumid < oldHumid && oldWind != ""){
			humidColor = "Blue";
			console.log("Humidity: " + humidColor);
		}else if(newHumid == oldHumid && oldWind != ""){
			humidColor = "Black";
			console.log("Humidity: " + humidColor);
		}

		var newWind = parseFloat(currentWindString);
		var oldWind = parseFloat(oldCurrentWindString);

		//console.log("NewWind: " + currentWindString);
		//console.log("OldWind: " + oldCurrentWindString);

		if(newWind > oldWind && oldWind != ""){
			windColor = "Red";
			console.log("Wind: " + windColor);
		}else if(newWind < oldWind && oldWind != ""){
			windColor = "Blue";
			console.log("Wind: " + windColor);
		}else if(newWind == oldWind && oldWind != ""){
			windColor = "Black";
			console.log("Wind: " + windColor);
		}

   	   	td2SNew.appendChild(text2);
    	td2SNew.setAttribute("id", "td2S");
    	td3SNew.appendChild(text3);
    	td3SNew.setAttribute("id", "td3S");
    	td3SNew.style.color = tempColor;
    	td4SNew.appendChild(text4);
    	td4SNew.setAttribute("id", "td4S");
    	td4SNew.style.color = humidColor;
    	td5SNew.appendChild(text5);
    	td5SNew.setAttribute("id", "td5S");
    	td5SNew.style.color = windColor;
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
* A recursive function to sort a JSON array in descending order
* @param prop        The property by which to sort by
* 
**/ 
function predicatBy(prop){
   return function(a,b){
      if( a[prop] < b[prop]){
          return 1;
      }else if( a[prop] > b[prop] ){
          return -1;
      }
      return 0;
   }
}