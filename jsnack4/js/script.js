/* Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro. */

// array con pochi elementi
const shortArray = [2, 6, 7, 9];

// array con molti elementi
const longArray = [1, 3, 5, 11, 13, 15, 17, 19, 42, 77];

// finchè longArray avrà più elementi di shortArray
while (longArray.length > shortArray.length) {
  // aggiungi un numero casuale da 1 a 100 a shortArray
  shortArray.push(Math.floor(Math.random() * 100) + 1);
}

// stampa in console di verifica
console.log('array corto', shortArray);
console.log('array lungo', longArray);
