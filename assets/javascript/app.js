$(document).ready(function(){
 var athletesArray = ["Kobe Bryant", "Michael Jordan", "Lebron James", "Tom Brady"];
    for (var i = 0; i < athletesArray.length; i++) {
        $("#athlete-buttons").append("<button type='button' onclick='searchGif(\"" + athletesArray[i] + "\")' class='btn btn-primary' value=' " + athletesArray[i] + "'> " + athletesArray[i] + " </button>");
    }
    }
    
