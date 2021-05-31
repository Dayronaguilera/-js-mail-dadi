
var email = prompt("inserisci la tua email");
var vettoreEmail = ["mariorossi@gmail.com" , "pincopallo@gmail.com", "aguilera.dayron@gmail.com"];
var check = false;

for (var i = 0; i < vettoreEmail.length; i++) {
    if (vettoreEmail[i] === email) {
        check = true;
        break;  
    }    
}
if (check) {
    document.getElementById("login").innerHTML = "login effettuato"
    
} else {
    document.getElementById("login").innerHTML = "login non effettuato email errata"
}

// gioco dei dadi ------------------
var dadoPc = Math.random(1,5)
var dadoUtente = Math.random(1,5)

if (dadoUtente > dadoPc) {
    alert("HAI VINTOOOOOOOOOOO")
} else {
    alert("hai perso")
}

