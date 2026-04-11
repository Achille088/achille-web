// Creazione oggetto libro
let book = {
    titolo: "Il nome della rosa",
    autore: "Umberto Eco",
    annoPubblicazione: 1980,
    genere: "Romanzo storico",
    numeroPagine: 512
};

// Stampa delle proprietà dell'oggetto
for (let key in book) {
    // stampiamo nome della chiave e valore associato
    console.log(`${key} -> ${book[key]}`);
}
