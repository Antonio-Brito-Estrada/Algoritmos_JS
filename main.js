// Validate PIN
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 
// digits or exactly 6 digits. 
// If the function is passed a valid PIN string, return true, else return false

function numeroPin(num) {
  if (typeof num === "number") {
    if (num.toString().length === 4 || num.toString().length === 6) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(numeroPin(1234));



// Persistent Bugger
// Write a function, persistence, that takes in a positive parameter num and returns its 
// multiplicative persistence, which is the number of times you must multiply the digits in num
// until you reach a single digit

var respuesta, numMultiplicar = 0, cont = 1, converNumArr;
function persistence(num) {
  if (typeof num === "number" && num.toString().length > 1) {
    converNumArr = num.toString().split("")
    do {
      respuesta = 1;
      for (var i = 0; i < converNumArr.length; i++) {
        numMultiplicar = converNumArr[i];
        respuesta = numMultiplicar * respuesta;
      }
      if (respuesta.toString().length >= 2) {
        cont++;
        converNumArr = respuesta.toString().split("");
      }
    } while (respuesta.toString().length > 1);
    return cont;
  } else {
    return 0;
  }
}

console.log(persistence(4));

// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns 
// the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length 
// of the array will always be at least 2.
// The array will always contain letters in only one case. (Use the English alphabet with 26 letters!)

var minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"], miArr = ['a', 'b', 'c', 'd', 'f'],
  mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"], posicion = miArr.length;

function findMissingLetter(arr) {
  if (arr[0] === miArr[0].toUpperCase()) {
    return mayusculas[posicion + 1];
  } else {
    return minusculas[posicion + 1];
  }
}

console.log(findMissingLetter(miArr));


// Array.diff
// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order

var myNewArr = [], resultArr = [];
function arrayDiff(a, b) {
  resultArr = [...a];
  for (var i = 0; i < b.length; i++) {
    var cont = 0;
    a.forEach((element, index) => {
      if (b[i] === element) {
        resultArr.splice(index - cont, 1);
        cont++;
      }
    }
    );
    a = resultArr;
  }
  return resultArr;
}
console.log(arrayDiff([1, 2, 2, 2, 3], [2]));