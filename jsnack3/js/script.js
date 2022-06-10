/* Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

// variabile flag per la somma dei numeri dati dall'utente
let somma = 0;

/***** INIZIO CALCOLO CON FOR ******/
// generazione dei 5 prompt
/* for (let i = 0; i < 5; i++) {
  const userNumber = parseInt(prompt('Scrivi un numero'));
//   somma del numero attuale alla somma dei numeri precedenti
  somma += userNumber;
} */

// stampa della somma totale
/* console.log('Somma di tutti i numeri', somma); */
/***** FINE CALCOLO CON FOR ******/

/***** INIZIO CALCOLO CON WHILE *****/
// generazione dei 5 prompt
let i = 0;
while (i < 5) {
  const userNumber = parseInt(prompt('Scrivi un numero'));
  //   somma del numero attuale alla somma dei numeri precedenti
  somma += userNumber;
  i++;
}

// stampa della somma totale
console.log('Somma di tutti i numeri', somma);
