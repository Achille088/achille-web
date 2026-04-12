// ===============================
// SOLUZIONE 1.1 - Creazione oggetto e JSON
// ===============================

// Creiamo un oggetto libro con le proprietà richieste
const libro = {
  titolo: "Il Nome della Rosa",
  autore: "Umberto Eco",
  anno: 1980,
  genere: "Giallo",
  pagine: 503,
  disponibile: true
};

// Convertiamo l'oggetto in stringa JSON
// JSON.stringify trasforma un oggetto in testo
const libroJSON = JSON.stringify(libro);


// ===============================
// SOLUZIONE 1.2 - Array e JSON formattato
// ===============================

// Creiamo un array con più libri
const biblioteca = [
  { titolo: "Libro 1", autore: "Autore 1", anno: 2020 },
  { titolo: "Libro 2", autore: "Autore 2", anno: 2021 },
  { titolo: "Libro 3", autore: "Autore 3", anno: 2022 }
];

// Convertiamo l'array in JSON leggibile (indentazione 2 spazi)
const bibliotecaJSON = JSON.stringify(biblioteca, null, 2);


// ===============================
// SOLUZIONE 1.3 - Replacer con array
// ===============================

// Convertiamo solo alcune proprietà dell'oggetto
// Vengono incluse solo titolo, autore e anno
const libroFiltrato = JSON.stringify(libroCompleto, ["titolo", "autore", "anno"]);


// ===============================
// SOLUZIONE 2.1 - JSON.parse()
// ===============================

// Convertiamo la stringa JSON in oggetto JavaScript
const libroRecuperato = JSON.parse(jsonString);


// ===============================
// SOLUZIONE 2.2 - Parsing array JSON
// ===============================

// Convertiamo la stringa JSON in array
const libriArray = JSON.parse(arrayJSON);

// Stampiamo il titolo di ogni libro
libriArray.forEach(libro => {
  console.log("Titolo:", libro.titolo);
});


// ===============================
// SOLUZIONE 2.3 - Gestione errori
// ===============================

try {
  // Tentiamo di convertire JSON non valido
  const risultato = JSON.parse(jsonNonValido);
} catch (errore) {
  // Se c'è errore lo gestiamo senza bloccare il programma
  console.error("Errore di parsing JSON:", errore.message);
}


// ===============================
// SOLUZIONE 3.1 - Replacer funzione
// ===============================

// Creiamo oggetto utente
const utente = {
  nome: "Mario Rossi",
  email: "mario@example.com",
  password: "segreta123",
  ruolo: "admin"
};

// Funzione replacer che esclude la password
function replacerSicuro(key, value) {
  if (key === "password") return undefined; // escludiamo campo sensibile
  return value;
}

// Convertiamo in JSON senza password
const utenteJSON = JSON.stringify(utente, replacerSicuro);


// ===============================
// SOLUZIONE 3.2 - Date in JSON
// ===============================

// Convertiamo oggetto con Date in JSON
// Le Date vengono automaticamente trasformate in stringhe ISO
const prestitoJSON = JSON.stringify(prestito, null, 2);


// ===============================
// SOLUZIONE 3.3 - Reviver Date
// ===============================

// Funzione reviver per riconvertire stringhe in Date
function reviverDate(key, value) {
  // Controlliamo se il valore è una stringa nel formato data ISO
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value); // convertiamo in oggetto Date
  }
  return value;
}

// Parsing con conversione automatica delle date
const prestitoRecuperato = JSON.parse(prestitoJSON, reviverDate);


// ===============================
// SOLUZIONE 4.1 - Clonazione profonda
// ===============================

// Creiamo una copia profonda dell'oggetto
// stringify + parse = clone completo
const bibliotecaCopia = JSON.parse(JSON.stringify(bibliotecaOriginale));

// Modifichiamo la copia (non l'originale)
bibliotecaCopia.indirizzo.città = "Roma";
bibliotecaCopia.libri[0].disponibile = false;


// ===============================
// SOLUZIONE 4.2 - Confronto oggetti
// ===============================

// Confrontiamo due oggetti trasformandoli in stringhe JSON
function oggettiUguali(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}


// ===============================
// SOLUZIONE 5.1 - Simulazione localStorage
// ===============================

const storage = (function() {

  // Oggetto privato che contiene i dati
  const dati = {};

  return {

    // Salva un valore come stringa
    setItem: function(chiave, valore) {
      dati[chiave] = String(valore);
    },

    // Recupera un valore (o null se non esiste)
    getItem: function(chiave) {
      return dati.hasOwnProperty(chiave) ? dati[chiave] : null;
    },

    // Rimuove un elemento
    removeItem: function(chiave) {
      delete dati[chiave];
    },

    // Cancella tutto lo storage
    clear: function() {
      for (let key in dati) {
        delete dati[key];
      }
    },

    // Restituisce numero di elementi salvati
    get length() {
      return Object.keys(dati).length;
    }
  };

})();


// ===============================
// SOLUZIONE 5.2 - Salvataggio e recupero JSON
// ===============================

// Creiamo array di libri
const mieiBibliLibri = [
  { titolo: "Libro A", autore: "Autore A" },
  { titolo: "Libro B", autore: "Autore B" }
];

// Salviamo nello storage (convertendo in JSON)
storage.setItem("biblioteca", JSON.stringify(mieiBibliLibri));

// Recuperiamo e riconvertiamo in oggetto
const bibliotecaRecuperata = JSON.parse(storage.getItem("biblioteca"));


// ===============================
// SOLUZIONE 5.3 - Funzioni helper
// ===============================

// Salva un oggetto nello storage
function salvaOggetto(chiave, oggetto) {
  storage.setItem(chiave, JSON.stringify(oggetto));
}

// Recupera un oggetto dallo storage
function recuperaOggetto(chiave) {
  try {
    const valore = storage.getItem(chiave);
    return valore ? JSON.parse(valore) : null;
  } catch (errore) {
    console.error("Errore nel recupero:", errore.message);
    return null;
  }
}

// Aggiunge un elemento a una lista salvata
function aggiungiALista(chiave, elemento) {
  const lista = recuperaOggetto(chiave) || []; // se non esiste, array vuoto
  lista.push(elemento); // aggiungiamo elemento
  salvaOggetto(chiave, lista); // salviamo aggiornato
}


// ===============================
// SOLUZIONE 6.1 - Classe completa
// ===============================

class BibliotecaPersistente {

  constructor(chiaveStorage = "biblioteca") {
    this.chiaveStorage = chiaveStorage;
    this.libri = [];
    this.carica(); // carica dati se esistono
  }

  aggiungiLibro(libro) {
    this.libri.push(libro); // aggiunge libro
    this.salva(); // salva automaticamente
  }

  rimuoviLibro(titolo) {
    // rimuove libro ignorando maiuscole/minuscole
    this.libri = this.libri.filter(l => 
      l.titolo.toLowerCase() !== titolo.toLowerCase()
    );
    this.salva();
  }

  cercaLibro(titolo) {
    // cerca libro ignorando maiuscole/minuscole
    return this.libri.find(l => 
      l.titolo.toLowerCase() === titolo.toLowerCase()
    );
  }

  salva() {
    // salva in formato JSON nello storage
    storage.setItem(this.chiaveStorage, JSON.stringify(this.libri));
  }

  carica() {
    try {
      const dati = storage.getItem(this.chiaveStorage);
      if (dati) {
        this.libri = JSON.parse(dati);
      }
    } catch (errore) {
      console.error("Errore caricamento:", errore.message);
      this.libri = [];
    }
  }

  esportaJSON() {
    // restituisce JSON formattato
    return JSON.stringify(this.libri, null, 2);
  }

  importaJSON(jsonString) {
    try {
      this.libri = JSON.parse(jsonString);
      this.salva();
    } catch (errore) {
      console.error("Errore import:", errore.message);
    }
  }

  getStatistiche() {
    // calcolo autori unici
    const autori = new Set(this.libri.map(l => l.autore));

    // calcolo generi unici
    const generi = new Set(this.libri.map(l => l.genere));

    // somma pagine
    const totalePagine = this.libri.reduce((tot, l) => tot + (l.pagine || 0), 0);

    return {
      totaleLibri: this.libri.length,
      autoriUnici: autori.size,
      totalePagine: totalePagine,
      generiUnici: generi.size
    };
  }
}
