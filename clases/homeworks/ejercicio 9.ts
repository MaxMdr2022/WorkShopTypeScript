function suma2(a: number, b: string): string;  // si es un numero y un string que devuelva un string     al devolver un string puede concatenar
function suma2(a: string, b: string): string;   // si es un string y un string que devuelva un string
function suma2(a: string, b: number): string;   // si es un numero y un numero que devuelva un string
function suma2(a: number, b: number): number {  // si es un numero y un numero que devuelva un numero    al devolver numeros puede sumar
    return a + b;
}

let resultado = suma2(4, 4) //cambien los parametros para ver su comportamiento
//haciendo hover sobre resultado

console.log(resultado) //8

console.log(suma2(2, "f")) // 2f
console.log(suma2("f", 2)) // f2
console.log(suma2("ho", "la")) // hola
// console.log(suma2(true, false)) // No overload matches this call. The last overload gave the following error.Argument of type 'boolean' is not assignable to parameter of type 'number'

//Aplicar lo mismo para el resto de las operaciones matematicas!
