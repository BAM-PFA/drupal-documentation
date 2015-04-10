  var csvParse = function() {

    // put you document url here
    var sharedDocUrl = 'https://docs.google.com/spreadsheets/d/1xtwCO0SaMV7hkKsJut5-U0XbM7zKALfXz0rr_LUMuSo/pubhtml'

    // can also be only the ID
    // var sharedDocUrl = '1Rk9RMD6mcH-jPA321lFTKmZsHebIkeHx0tTU0TWQYE8'

    var targetDiv = 'afObjectFields';

    // holds datas at a closure level
    // this then can be accessed by closure's functions
    var dataObj;



    function loadData(data, tabletop) {

    	newHTML = [];
        menuHTML = []

    	dataObj = data;

    	// get the sheet that corresponds to a matching div ID on current page
    	sheetName = parseSheets(tabletop);
    	//use the sheetname to get appropriate data from tabletop model
    	newHTML = getDataFromSheet(sheetName);
        menuHTML = generateMenu(sheetName);

    	//write the stuff
    	document.getElementById(sheetName).innerHTML = newHTML.join('');
        menuContainer = sheetName + '-menu';
        document.getElementById(menuContainer).innerHTML = menuHTML.join('');
    }

    // gets the data from various functions and creates new HTML
    function getDataFromSheet(sheetName){

    	generateTitles(sheetName);
    	generateDetails(sheetName);

    	// create array of titles with HTML
    	$.each(titles, function(i,v) {
    		newHTML.push('<h3 id="' + machineName[i] + '">' + v + '</h3>');
    		newHTML.push('<strong>Machine Name:</strong> <code> ' + machineName[i] + '</code>');
    		newHTML.push('<p>' + description[i] + '</p>');
    		newHTML.push('<ul>');
    		newHTML.push('<li><strong>Drupal Field Type</strong>: ' + drupalFieldType[i] + '</li>');
    		newHTML.push('<li><strong>Example Values</strong>: ' + exampleValues[i] + '</li>');
    		newHTML.push('</ul>');
            newHTML.push('<p>' + notes[i] + '</p><hr />');
    	});

    	return newHTML;
    }

    function generateMenu(sheetName){

        generateTitles(sheetName);
        generateDetails(sheetName);

        // create array of titles with HTML
        $.each(titles, function(i,v) {
            console.log(i);
            menuHTML.push('<a href="#' + machineName[i] + '">' + v + '</a><br />');
        });

        return menuHTML;
    }    

    // Returns an array of drupal field names 

    function generateTitles(sheetName) {

    	console.log();

    	titles = [];
   
    	for(var i in dataObj[sheetName]['elements']) {
    		titles.push(dataObj[sheetName]['elements'][i]['Field Name']);
    	}   

    	return titles;
    }

    function generateDetails(sheetName) {

    	machineName = [];
    	drupalFieldType = [];
    	description = [];
    	exampleValues = [];
        notes = [];

    	for(var i in dataObj[sheetName]['elements']) {
    		machineName.push(dataObj[sheetName]['elements'][i]['Machine Name']);
    		drupalFieldType.push(dataObj[sheetName]['elements'][i]['Drupal Field Type']);
    		description.push(dataObj[sheetName]['elements'][i]['Description']);
    		exampleValues.push(dataObj[sheetName]['elements'][i]['Example Values']);
    	    notes.push(dataObj[sheetName]['elements'][i]['Notes']);

        }

    	return machineName, drupalFieldType, description, exampleValues, notes;
    }

    function parseSheets(tabletop) {

		$.each(tabletop.model_names, function(i,v) {
    		if(document.getElementById(v)) {
    			sheetName = v;
    		}
    	});

    	return sheetName;
    }

    return {
        init: function() {
                Tabletop.init( { 
                	key: sharedDocUrl,
                    callback: loadData,
                    simpleSheet: false } );

        }
    };
}();

$(document).ready(function(){
	csvParse.init();
});
