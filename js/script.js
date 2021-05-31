
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
    
}else {
    document.getElementById("login").innerHTML = "login non effettuato email errata"
}

// gioco dei dadi ------------------
var dadoPc = Math.floor(Math.random() * 6) + 1;
var dadoUtente = Math.floor(Math.random() * 6) + 1;

var output = document.getElementById("result");

if (dadoUtente > dadoPc) {
    output.innerHTML = "HAI VINTOOOOOOO!"+ dadoPc + "---dadi---" + dadoUtente;
}else if(dadoUtente = dadoPc ){
    output.innerHTML = "Mi dispiace siamo pari!"+ dadoPc + "---dadi---" + dadoUtente;
}else {
    output.innerHTML = "Hai persoooooo!" + dadoPc + "---dadi---" + dadoUtente;
    
}

