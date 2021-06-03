
var email = prompt("inserisci la tua email");
var vettoreEmail = ["mariorossi@gmail.com" , "pincopallo@gmail.com", "aguilera.dayron@gmail.com"];
var check = false;

var output = document.getElementById("login");

for (var i = 0; i < vettoreEmail.length; i++) {
    if (vettoreEmail[i] === email) {
        check = true;
        break;  
    }    
}
if (check) {
    output.innerHTML += "login effettuato";
    
}else {
    output.innerHTML += "login non effettuato email errata";
}

// gioco dei dadi ------------------
var dadoPc = Math.floor(Math.random() * 6) + 1;
var dadoUtente = Math.floor(Math.random() * 6) + 1;

var output = document.getElementById("result");

output.innerHTML += "User:" + dadoUtente + "</br> Computer:" + dadoPc;

if (dadoUtente > dadoPc) {
    output.innerHTML += "</br> HAI VINTOOOOOOO!";

}else if(dadoUtente < dadoPc ){
    output.innerHTML += "</br> Hai persoooooo!";

}else {
    output.innerHTML += "</br> Siamo pari!";

}

