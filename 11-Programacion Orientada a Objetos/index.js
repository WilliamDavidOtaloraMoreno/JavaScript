const persona = {
    nombre: "William",
    edad: 34,
    isDeveloper: true,
    saludo: function(){
        console.log('Hello')
    }
}

//console.log(persona)
persona.saludo()

const otraPersona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function(){
        console.log('Hello')
    }
}

otraPersona.saludo()

//Funcion factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return{
        nombre,
        edad,
        isDeveloper,
        saludo: function(){
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona2 = creaPersona("Maria", 44, false)
console.log(nueva_persona2)