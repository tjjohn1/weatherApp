Assignment: SER421 Online - Lab 6
Author: Thomas Johnson
Date: 25 November 2016

#Author Information
ASURITE(s) - tjjohn1

Important Note:
There is a slight delay when populating the weather data initially, please be patient.
IF any actiosn are initated by the user prior to full loading, they are queued by AJAX and will be compelted after the full load.

#Testing and Performance
Running the application:
	Open the lab6.html page in a web browser (preferrably Chrome as it was tested in that browser)
	The page will display in a table, the Current weather for Phoenix and Paris, and a third selectable city to diplsay the weather for
	The third city's weather will not display until a city is selcted by the user

#Program Features
Header Data:
	The header shows the page title, as well as the average temperature, the hottest city, and the nicest city
	This header data changes as city weather data changes or is updated, and it is based upon all 3 cities' current weather data
	The nicest city is based upon:
		The temperature being between 60 and 90 degrees Farenheit
		The humidity being between 40 and 70 percent
		The wind speed being in between 5 and 10 miles per hour

Forecast Data:
	There is a forecast button next to each city, this button when activated, will display the following day and night forecast for the city

Refresh Data:
	There is a refresh button between the header and the weather table, when activated, the weather table data will be updated
	Also the header data will be dynamically updated based on the newly updated weather table data

Increasing/Decreasing Weather Values (Extra Credit 1):
	In the weather table is the current weather, when refreshed by the refresh button, the text color of the
	temperature, humidity, and wind speed values are reflected as follows:
		If the value is increasing = text color is red
		If the value is decreasing = text color is blue
		If the value is staying the same = text color is black

Error Handling:
	On the APIXU calls through AJAX, if there is a response other than 0 or 200, an error message will be displayed to the user
	that the request was unable to be processed, along with the actual response data text.

Refresh/Updated Time Value (Extra Credit 1):
	In the Last Updated field of the Current Weather Table, upon a refresh, a Delta value will be displayed
	This Delta value represents the number of seconds since the data was last updated by the APIXU server
	Note: This is not the last time which the data was requested by the user, but the last time the actual APIXU updated it's own weather data for a particualr city

	APIXU may sometimes display an updated time which is earlier then the previous refreshed time, this is an APIXU varaiton, in which case the Delta will be zero

Notes
    The lab6.js file contains the code for data handling, most routing, DOM writing, and AJAX handling for the APIXU
    The lab6.html file contains the display page for the user, the refresh button and handling, and the inital onload table creation handling


#Requirements
Required Structure and Contents
	Within the activity1 subdirectory, the following files and folders must be contained:
		Files:
			lab6.js
			lab6.html

#Issues
No known Issues for Lab 6
    
