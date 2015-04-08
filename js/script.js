  var csvParse = function() {

    // put you document url here
    var sharedDocUrl = 'https://docs.google.com/spreadsheets/d/1xtwCO0SaMV7hkKsJut5-U0XbM7zKALfXz0rr_LUMuSo/pubhtml'

    // can also be only the ID
    // var sharedDocUrl = '1Rk9RMD6mcH-jPA321lFTKmZsHebIkeHx0tTU0TWQYE8'

    var targetDiv = 'afObjectFields';

    // holds datas at a closure level
    // this then can be accessed by closure's functions
    var dataObj;



    function showInfo(data, tabletop) {
    	newHTML = [];
    	dataObj = data;

    	generateTitles();
    	generateDetails();
    	
    	// create array of titles with HTML
    	$.each(titles, function(i,v) {
    		newHTML.push('<h3>' + v + '</h3>');
    		newHTML.push('<p>' + description[i] + '</p>');
    		newHTML.push('<ul>');
    		newHTML.push('<li><strong>Machine Name</strong>: ' + machineName[i] + '</li>');
    		newHTML.push('<li><strong>Drupal Field Type</strong>: ' + drupalFieldType[i] + '</li>');
    		newHTML.push('<li><strong>Example Values</strong>: ' + exampleValues[i] + '</li>');
    		newHTML.push('</ul>');
    	});

    	$('#afObjectFields').html(newHTML.join(''));


    }

    // Returns an array of drupal field names 

    function generateTitles( ) {
    	titles = [];
   
    	for(var i in dataObj) {
    		titles.push(dataObj[i]['Field Name']);
    	}   

    	return titles;
    }

    function generateDetails( ) {

    	machineName = [];
    	drupalFieldType = [];
    	description = [];
    	exampleValues = [];

    	for(var i in dataObj) {
    		machineName.push(dataObj[i]['Machine Name']);
    		drupalFieldType.push(dataObj[i]['Drupal Field Type']);
    		description.push(dataObj[i]['Description']);
    		exampleValues.push(dataObj[i]['Example Values']);
    	}

    	return machineName, drupalFieldType, description, exampleValues;
    	
    }



    function generateContent(){
        var table = document.createElement("table");
        var head  = generateTableHeader();
        table.appendChild(head);
        var body  = generateTableBody();
        table.appendChild(body);
        return table;
    }

    function generateTableHeader(){
        var d         = dataObj[0];
        var tHead     = document.createElement("thead");
        var colHeader = [];
        $.each(d, function( index, value){
            colHeader.push(index);
        });
        var row = generateRow(colHeader, 'th');
        tHead.appendChild(row);
        return tHead;
    }

    // this can be factorized with generateTableHeader
    function generateTableBody(){
        var tBody = document.createElement("tbody");
        $.each(dataObj, function( index, value ){
            var rowVals = [];
            $.each(value, function(colnum, colval){
                rowVals.push(colval);
            });
            var row = generateRow(rowVals);
            tBody.appendChild(row);
        });
        return tBody;
    }

    function generateRow(headersArray, cellTag){
        cellTag = typeof cellTag !== 'undefined' ? cellTag : 'td';
        var row = document.createElement("tr");
        $.each(headersArray, function( index, value){
            if( value != "rowNumber"){
                var cell     = document.createElement(cellTag);
                var cellText = document.createTextNode(value);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        });
        return row;
    }

    return {
        init: function() {
                Tabletop.init( { key: sharedDocUrl  ,
                         callback: showInfo,
                         simpleSheet: true } );

        }
    };
}();

$(document).ready(function(){
	csvParse.init();
});
