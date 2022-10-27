//Crea una función que reciba dos arrays y devuelva true si tienen exactamente el mismo contenido (en el mismo orden) y false si no

"use strict";

let arr1 = ["rojo", "azul", "verde"]; // a comparar
let arr2 = ["rojo", "azul", "verde"]; // true
let arr3 = ["rojo", "amarillo", "verde"]; // false
let arr4 = ["rojo", "azul", "verde", "amarillo"]; // false
let longArray; // Guardaré en esta variable la longitud del array mayor para usarlo como límite de vueltas en el bucle for

function comparaArray(a, b) {
    /* if (a.length > b.length || a.length === b.length) {
        longArray = a.length;
        console.log(longArray); // Este código hacía lo mismo que la función longitudArrayFunc
    } else longArray = b.length;
    console.log(longArray); */
    for (let i = 0; i < longitudArrayFunc(a, b); i++) {
        // Recorro el array para comparar sus elementos
        //console.log(a[i], b[i]);
        if (a[i] !== b[i]) {
            // Si encuentra uno distinto devuelve false y sale
            return false;
        }
    }
    return true;
}

console.log(comparaArray(arr4, arr3));

/////////////
// Función que devuelve el valor del array más largo para usarla como límite de vueltas en el bucle for de la función comparaArray

function longitudArrayFunc(a, b) {
    if (a.length > b.length || a.length === b.length) {
        longArray = a.length;
        //console.log(longArray);
        return longArray;
    } else longArray = b.length;
    //console.log(longArray);
    return longArray;
}
