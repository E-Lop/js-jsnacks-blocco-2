/* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
la somma degli elementi è minore di 50. */

// array vuoto che conterrà i numeri dell'utente
const userNumbers = [];

// variabile flag con la somma degli elementi dell'array
let sumOfUserNumbers = 0;

// chiedi numeri fino a quando sumOfUserNumbers < 50
while (sumOfUserNumbers < 50) {
  let promptNumber = parseInt(prompt('Scrivi un numero'));
  userNumbers.push(promptNumber);
  //   a ogni iterazione somma al numero precedente
  sumOfUserNumbers += promptNumber;
}

// valori dentro array userNumbers
console.log(userNumbers);

// somma totale dei numeri dati dall'utente
console.log('Somma totale', sumOfUserNumbers);
