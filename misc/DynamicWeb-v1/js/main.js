// use jQuery to select the HTML elements we're going to manipulate
var homeGoButton = $('#home button');
var homeDropdown = $('#home select');
var resultsOL = $('#results ol');
var homeSection = $('#home')
var resultsSection = $('#results')
var resultsBackButton = $('#results .back')
var detailsBackButton = $('#details .back')
var detailsInfo = $('#details #info')
var detailsSection = $('#details')

// tell the GO button to do something when we click it
homeGoButton.click( function()
{
  // get user input
  var selectedOption = homeDropdown.val();
  // using jQuery val(), see http://api.jquery.com/val
  console.log('You picked ' + selectedOption);

  var filters = [ {key:selectedOption} ]; // array of objects
    var resultsList = filterAndSortList(peopleList, filters);

  	console.log(resultsList);

    // show the results in the #results section
  	showList(resultsList, resultsOL);

    $('#results li').click( function() {
// grab the id from the clicked item
var resultId = $(this).attr('id')
// use the id to get the right data
var resultData = resultsList[resultId]
console.log(resultData)

// call the function showDetails()
showDetails(resultData, detailsInfo)

// show the details!
resultsSection.hide()
detailsSection.show()
})

homeSection.hide()
resultsSection.show()
})

resultsBackButton.click( function(){
resultsSection.hide()
homeSection.show()
})

detailsBackButton.click( function(){
detailsSection.show()
homeSection.hide()
})




resultsToggleButton.click( function() {

    // console.log('clicked resultsToggleButton')

    // find out which element is currently visible
    // is the list visible?
    var listDisplay = resultsOL.css('display')
    if (listDisplay == 'block') isListVisible = true
    else isListVisible = false

    // console.log(isListVisible)

    // if the list is visible
    if (isListVisible)
    {
        // we want to show the map and hide the list
        resultsMap.show()
        map.resize() // get the map to take all the available space
        resultsOL.hide()
        // change the button text to say "List"
    }
    else
    {
        // we want to show the list and hide the map
        resultsOL.show()
        resultsMap.hide()
        // change the button text to say "Map"
    }
})
