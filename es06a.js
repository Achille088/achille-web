// Importiamo il modulo per leggere input da terminale
const readline = require("readline");

// Creiamo interfaccia per input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Chiediamo il primo numero
rl.question("Inserisci il primo numero: ", (n1) => {

  // Chiediamo il secondo numero
  rl.question("Inserisci il secondo numero: ", (n2) => {

    // Chiediamo l'operazione
    rl.question("Inserisci operazione (+, -, *, /, **): ", (op) => {

      // Convertiamo le stringhe in numeri
      const num1 = Number(n1);
      const num2 = Number(n2);

      let risultato;

      // Controllo validità numeri
      if (isNaN(num1) || isNaN(num2)) {
        console.log("Errore: inserisci numeri validi");
      } else {

        // Switch per scegliere operazione
        switch (op) {
          case "+":
            risultato = num1 + num2;
            break;

          case "-":
            risultato = num1 - num2;
            break;

          case "*":
            risultato = num1 * num2;
            break;

          case "/":
            risultato = num2 !== 0 ? num1 / num2 : "Errore: divisione per 0";
            break;

          case "**":
            risultato = num1 ** num2;
            break;

          default:
            risultato = "Operazione non valida";
        }

        // Stampiamo risultato
        console.log("Risultato:", risultato);
      }

      // Chiudiamo input
      rl.close();
    });
  });
});
