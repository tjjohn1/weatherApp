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

}

/**
 * A function to build the selectable city row of the current weather table
 * @param request        The AJAX request to APIXU, contains readable returned data
 *
 **/
function selectableRow(request) {

}