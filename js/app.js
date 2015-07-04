$(document).ready(function() {
    
    var upTo = prompt("To what number would you like me to calculate Fizz Buzz?");
    
    upTo = Number(upTo);
    
    if ((!isNaN(upTo)) && (upTo === parseInt(upTo, 10)) && (upTo >0)) {
        fizzBuzz(upTo);
    } else {
        alert("Sorry, I need an integer number greater than 0.  Please reload to try again.");
    }

function fizzBuzz(countTo) {
    for (var i=1; i<=countTo; i++) {
        if (!(i%15)) {
            $('.output').append("fizz buzz <BR>");
        }
        else if (!(i%5)){
            $('.output').append("buzz <BR>");
        }
        else if (!(i%3)){
            $('.output').append("fizz <BR>");
        }
        else {
            $('.output').append(i + "<BR>");
        }
    }
}
});