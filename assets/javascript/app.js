$(document).ready(function(){
 var athletesArray = ["Kobe Bryant", "Michael Jordan", "Lebron James", "Tom Brady"];
    for (var i = 0; i < athletesArray.length; i++) {
        $("#athlete-buttons").append("<button type='button' onclick='searchGif(\"" + athletesArray[i] + "\")' class='btn btn-primary' value=' " + athletesArray[i] + "'> " + athletesArray[i] + " </button>");
    }
 
    }
    function athleteButtonClicked() {
    var userInput = $('#athlete-input').val();
    searchGif(userInput);  
}


function submitButtonClicked() {
     var userInput = $('#athlete-input').val();

    if (userInput) {
        $('#athlete-buttons').append("<button type='button' onclick='searchGif(\"" + userInput + "\")' class='btn btn-primary' value=' " + userInput + "'> " + userInput + " </button>");
    }
}
