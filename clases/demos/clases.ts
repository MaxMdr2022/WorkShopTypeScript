class Persona {
    nombre: string; //por defecto, son publicas
    private edad: number;
    protected email: string
    constructor(nombre: string, edad: number, email: string) {
        this.nombre = nombre;
        this.edad = edad
        this.email = email
    }
    getEdad () {
        return 'mi edad es ' + this.edad
    }
}

class Estudiante extends Persona {
    isActive: boolean
    constructor(nombre: string, edad: number, email: string) {
        super(nombre, edad, email)
        this.isActive = false
    }
    funcionPrueba() {
       return this.email 
    }
}


let mati = new Persona('matias', 29, 'mati@mail.com')
let fede = new Estudiante('fede', 29, 'fede@mail.com')
// fede.email // Property 'email' is protected and only accessible within class 'Persona' and its subclasses
mati.nombre //publico, lo puedo acceder desde fuera de la clase

console.log(mati.getEdad()) // mi edad es 29

console.log(fede.funcionPrueba()) // fede@email.com
export {}