
var email = prompt("inserisci la tua email");
var vettoreEmail = ["mariorossi@gmail.com" , "pincopallo@gmail.com", "aguilera.dayron@gmail.com"];
var chek = false;

for (var i = 0; i < vettoreEmail.length; i++) {
    if (vettoreEmail[i] === email) {
        chek = true;
        break;  
    }    
}
if (chek) {
    document.getElementById("login").innerHTML = "login effettuato"
    
} else {
    document.getElementById("login").innerHTML = "login non effettuato email errata"
}