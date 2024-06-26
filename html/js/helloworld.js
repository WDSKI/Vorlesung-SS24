//Zeilenkommentar
/*
Mehrzeiliger Kommentar
*/

//Variablen in JavaScript
/*
Alle Variablen sind Typenlos
- var wird IMMER als globale Variable erzeugt, auch wenn die initialiesierung
erst in einer Funktion erfolgt -> eher veraltet
- let ist eine Variable, die nur innerhalb der Funktion in der sie initalisiert wurde,
zur Verfügung steht
- const ist eine Konstante, die nur innerhalb der Funktion in der sie initalisiert wurde,
zur Verfügung steht
*/

//String
let string = 'String';
//Number
const number = 10;
let float = 10.0;
//Bool
let bool = true;
//array
//Alle Datentypen können in einem Array verwendet werden, der Typ muss nicht extra deklariert werden
//Arrays können über n-Dimensionale verschachtelungen augebaut werden
//Der Aufruf erfolgt über den index der Ebene N in [] Bsp: arrayNDimension[idx0][idx1]
let array = [0, 1, 2, 3, 4, 5];
let arrayNDimension = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
];
//object
//Ein Object besteht aus einer beliebigen Anzahl Key-Value-Pairs mit beliebigen Datentypen
//Ein object ist ein n-Dimensinaler Baum, der über den Dot-Walk zugriff auf die Childnodes bietet
let object = {
  id: '1234',
  name: 'Mustermann',
  age: 20,
  active: true,
  objectChild: {
    studiengang: 'Informatik',
    dozent: 'mustermann',
    d1234: 'test',
  },
};

//Kopien von Objekten und Arrays werden mit dem s.g.Spreadoperator kopiert
let objectCopy = { ...object };

//Funktionen in JavaScript
//oldschool
const addition = function (val1, val2) {
  return val1 + val2;
};
//moderner
const subtraktion = (val1, val2) => {
  return val1 - val2;
};
const multiplilation = (val1, val2) => val1 * val2;

let addValue = addition(1, 4);
// console.log(addValue);
// console.log(subtraktion(5, 3));
// console.log(multiplilation(5, 2));

//If else
const checkBox = true;
const number1 = 1;
const number2 = '1';

if (number2 === checkBox) {
  //   console.log('if case true');
} else if (!checkBox) {
  //   console.log('else if case is true');
} else {
  //   console.log('last else');
}
//Ternary Operator
// checkBox ? console.log('case true') : console.log('case false');

//Loops
let index = 0;
while (index < array.length) {
  console.log(array[index]);
  index++;
}

for (let x = 0; x < array.length; x++) {
  console.log(array[x]);
}
