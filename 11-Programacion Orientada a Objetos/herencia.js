// Inheritance - Herencia
class Persona{
    _nombre
    _edad
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }

    saludo(){
        console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años.`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre,edad,lenguaje){
        super(nombre,edad)
        this.lenguaje = lenguaje
    }
    saludo(){
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("William",20,"Javascript")
console.log(nuevodev)
nuevodev.saludo()

// Polimorfismo