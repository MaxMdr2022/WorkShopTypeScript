interface Instructor {
    name: string;
    age: number;
  }
  
  function infoInstructor(inst: Instructor) {
    console.log(`${inst.name} - ${inst.age} years old`);
  }
  
  const noTypeVar = {name: "Franco", age: 26};
  
  infoInstructor(noTypeVar); // "Franco - 26 years old"

  // infoInstructor({nombre: "maxi"}) // Argument of type '{ nombre: any; }' is not assignable to parameter of type 'Instructor'. Object literal may only specify known properties, and 'nombre' does not exist in type 'Instructor'.