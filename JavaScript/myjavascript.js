

// HERE ARE THE VARIABLES 
var x = 1;
x <<= 25;
var y = "Suck on this!";
var boo = "BOO! WINDOW ALERT!";
// END VARIABLES

//  
window.onload = writeMessage;

function writeMessage() {
document.getElementById("demo").innerHTML = y;
}

document.write(x); //This uses document.write to output.

console.log(y); // HERE IS CONSOLE LOG - YOU CAN SEE IT IN THE CHROME CONSOLE UNDER "CONSOLE". 

window.alert(boo); // THIS WILL POP UP IN A WINDOW!

// REMEMBER TO KEEP THE OUTPUT STATEMENTS ALL LOWER CASE EXCEPT FOR THE TEXT "HTML" in "innerHTML" and "getElementById". 

