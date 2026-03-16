// process.argv contiene gli argomenti passati da linea di comando
const args = process.argv;

// prendo i valori passati da terminale
// esempio: node calc.js 5 add 3

let num1 = parseFloat(args[2]);   // primo numero
let operazione = args[3];         // operazione
let num2 = parseFloat(args[4]);   // secondo numero

let risultato;

// controllo quale operazione eseguire

if (operazione === "add") {
    risultato = num1 + num2; // somma
}
else if (operazione === "sub") {
    risultato = num1 - num2; // sottrazione
}
else if (operazione === "mul") {
    risultato = num1 * num2; // moltiplicazione
}
else if (operazione === "div") {
    risultato = num1 / num2; // divisione
}
else {
    // se l'operazione non esiste stampo errore
    console.log("Operazione non valida");
    process.exit();
}

// stampo il risultato
console.log("Risultato:", risultato);
