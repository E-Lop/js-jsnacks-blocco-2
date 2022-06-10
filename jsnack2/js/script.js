/* Calcola la somma e la media dei primi 10 numeri. */

// variabile con la somma dei numeri
let somma = 0;

// ottenimento dei primi 10 numeri
for (let i = 1; i <= 10; i++) {
  somma += i;
  //   visualizzazione delle somme parziali ad ogni iterazione
  console.log(somma);
}

// variabile con media dei 10 numeri
let mediaNumeri = somma / 10;

console.log('somma dei primi 10 numeri', somma);
console.log('media dei primi dieci numeri', mediaNumeri);
