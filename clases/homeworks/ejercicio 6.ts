function suma2(a: number, b: number): number {
    return a + b
} //que pasa si yo quisiera concatenar strings con esta funcion?

// suma2("hola", "que tal?");  //Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(suma2(1, 2))  // 3

// --------------------------------------------------------------------------------------------------------------

// function suma3(a: number | string, b: number | string): number | string {
//     return a + b // error  Operator '+' cannot be applied to types 'string | number' and 'string | number'
// }

// --------------------------------------------------------------------------------------------------------------

function suma4(a: any, b: any): any {
    return a + b
} 

console.log(suma4("hola", " maxi")) // "hola maxi"

console.log(1, 2) // 1 2 