// Importiamo modulo per input
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Funzione che esegue il calcolo
function calcola(num1, num2, op) {

  switch (op) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        return "Errore: divisione per 0";
      }
      return num1 / num2;

    case "**":
      return num1 ** num2;

    default:
      return "Operazione non valida";
  }
}

// Funzione principale
function avviaCalcolatrice() {

  rl.question("Inserisci il primo numero: ", (n1) => {
    rl.question("Inserisci il secondo numero: ", (n2) => {
      rl.question("Operazione (+, -, *, /, **): ", (op) => {

        const num1 = Number(n1);
        const num2 = Number(n2);

        // Controllo validità
        if (isNaN(num1) || isNaN(num2)) {
          console.log("Errore: numeri non validi");
        } else {
          // Chiamiamo la funzione
          let risultato = calcola(num1, num2, op);
          console.log("Risultato:", risultato);
        }

        rl.close();
      });
    });
  });
}

// Avvio programma
avviaCalcolatrice();
