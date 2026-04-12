// ===============================
// CREAZIONE OGGETTI LIBRO
// ===============================

// Creiamo il primo libro con tutte le proprietà richieste
const libro1 = {
  titolo: "Il Signore degli Anelli", 
  autore: "J.R.R. Tolkien", 
  anno: 1954, 
  genere: "Fantasy", 
  pagine: 1178, // 
  disponibile: true 
};

// Creiamo il secondo libro
const libro2 = {
  titolo: "1984",
  autore: "George Orwell",
  anno: 1949,
  genere: "Distopia",
  pagine: 328,
  disponibile: false 
};


// ===============================
// MODIFICA PROPRIETÀ
// ===============================

// Modifichiamo la disponibilità del libro2 (è stato restituito)
libro2.disponibile = true;

// Aggiungiamo una nuova proprietà (isbn) al libro1
libro1.isbn = "978-0544003415";


// ===============================
// OGGETTO CON METODI
// ===============================

// Creiamo un terzo libro con anche dei metodi
const libro3 = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  pagine: 503,
  disponibile: true,

  // Metodo che restituisce informazioni del libro
  getInfo: function() {
    // this si riferisce all'oggetto libro3
    return `${this.titolo} di ${this.autore} (${this.anno})`;
  },

  // Metodo per prestare il libro
  presta: function() {
    // Controlliamo se il libro è disponibile
    if (this.disponibile) {
      this.disponibile = false; // lo rendiamo non disponibile
      console.log(`Libro prestato: ${this.titolo}`);
    } else {
      console.log("Libro non disponibile");
    }
  },

  // Metodo per restituire il libro
  restituisci: function() {
    this.disponibile = true; // lo rendiamo disponibile
    console.log(`Libro restituito: ${this.titolo}`);
  }
};
// ===============================
// ARRAY DI OGGETTI
// ===============================
// Creiamo un array che contiene tutti i libri
const biblioteca = [libro1, libro2, libro3];
// ===============================
// FUNZIONE: CERCA PER AUTORE
// ===============================
// Questa funzione restituisce tutti i libri di un certo autore
function cercaPerAutore(libri, autore) {
  // filter crea un nuovo array con gli elementi che rispettano la condizione
  return libri.filter(libro => libro.autore === autore);
}
// ===============================
// FUNZIONE: LIBRI DISPONIBILI
// ===============================

// Restituisce solo i libri disponibili
function libriDisponibili(libri) {
  return libri.filter(libro => libro.disponibile);
}


// ===============================
// FUNZIONE: STAMPA BIBLIOTECA
// ===============================

// Stampa tutte le informazioni dei libri
function stampaBiblioteca(libri) {
  // Cicliamo ogni libro con forEach
  libri.forEach(libro => {
    console.log(`Titolo: ${libro.titolo}`);
    console.log(`Autore: ${libro.autore}`);
    console.log(`Anno: ${libro.anno}`);
    console.log(`Disponibile: ${libro.disponibile ? "Sì" : "No"}`);
    console.log("---"); // separatore
  });
}
// ===============================
// FUNZIONE: STATISTICHE
// ===============================

// Calcola varie statistiche sulla biblioteca
function statisticheBiblioteca(libri) {

  // Numero totale di libri
  const totaleLibri = libri.length;

  // Numero di libri disponibili
  const libriDisponibili = libri.filter(l => l.disponibile).length;

  // Somma totale delle pagine (usando reduce)
  const totalePagine = libri.reduce((somma, libro) => somma + libro.pagine, 0);

  // Media delle pagine (arrotondata)
  const mediaPagine = Math.round(totalePagine / totaleLibri);

  // Lista autori senza duplicati (usando Set)
  const autori = [...new Set(libri.map(libro => libro.autore))];

  // Restituiamo un oggetto con i risultati
  return {
    totaleLibri,
    libriDisponibili,
    totalePagine,
    mediaPagine,
    autori
  };
}
