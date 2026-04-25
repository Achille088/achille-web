// Importiamo modulo per input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione per invertire le cifre
function inverti_cifre(numero) {

  let str = numero.toString();     // numero → stringa
  let array = str.split("");       // stringa → array
  let invertito = array.reverse(); // inversione
  let risultato = invertito.join(""); // array → stringa

  return Number(risultato); // ritorno numero
}

// Funzione principale
function avviaProgramma() {

  rl.question("Inserisci un numero: ", (input) => {

    let numero = Number(input);

    // Controllo validità
    if (isNaN(numero)) {
      console.log("Errore: numero non valido");
    } else {
      // Chiamata funzione
      let risultato = inverti_cifre(numero);
      console.log("Numero invertito:", risultato);
    }

    rl.close();
  });
}

// Avvio programma
avviaProgramma();
