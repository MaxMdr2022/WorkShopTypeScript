function suma2(a: number, b: number): number {
    return a + b
}
// Logra que esta funcion tambien concatene strings

function suma3(a: number | string, b: number | string): any{


    if(typeof a === "string" && typeof b === "string"){

        return a.concat(b)
    }

    if(typeof a === "number" && typeof b === "number"){

        return a + b
    }


};

console.log(suma3("hola", " maxi")) // hola maxi

console.log(suma3(23,23)) // 46

console.log(suma3("hola", 23)) // undefined