interface User{
    name: string;
    age:number;
    lastName: string
}

class Form {

    constructor(

        private form: User
    ){}


    get(campo: string){    ///    con este metodo puedo acceder a las propiedades del User . 
                            //    Pero al estar implicito (string) el programador puede agregar cualquier cosa ( linea 28 )
        //codigo del formulario
    }
}

const formulario = new Form({

    name:"maxi",
    age:28,
    lastName:"meder"
})

formulario.get("fhasdhfadsghfs") // lo que va a pasar es que no va a encontrar esa propiedad y va a devolver undefined.
//                                  Y lo ideal es que el programador para acceder a las props User solo pueda poner name, age o lastname. 

// -----------------------------------------------------------------------------------------------------

//IMPLEMENTANDO keyof:

interface Usuario {
    name: string;
    age:number;
    lastName: string
}

class Formulario{

    constructor( private form: Usuario ){

    }

    get(campo: keyof Usuario){

        //codigo

        if( campo === "age"){

            return this.form.age
        }
        
        return this.form
    }
}

const formKeyof = new Formulario({
    name: "maxi",
    age: 28,
    lastName: "meder"
})

// ahora para acceder a las props de Usuario, kayof solo nos permitte acceder con las props 

// formKeyof.get("asdfasdf")  // Argument of type '"asdfasdf"' is not assignable to parameter of type 'keyof Usuario'
// formKeyof.get()  // error  Expected 1 arguments, but got 0.


formKeyof.get("name") // {name: "maxi", age: 28, lastName:"meder"}
console.log(formKeyof.get("age")) // 28
formKeyof.get("lastName")

