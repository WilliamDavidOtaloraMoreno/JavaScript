const datos = {
    nombre: "William",
    apellido: "Otalora",
    edad: 20,
    estatura: 1.79,
    isDeveloper: true
}

const edad = datos.edad
console.log(edad)

const lista = [
    {
        nombre: "William",
        apellido: "Otalora",
        edad: 20,
        estatura: 1.79,
        isDeveloper: true
    },
    {
        nombre: "Julian",
        apellido: "Gamba",
        edad: 21,
        estatura: 1.75,
        isDeveloper: false
    },
    {
        nombre: "Sergio",
        apellido: "Saavedra",
        edad: 19,
        estatura: 1.79,
        isDeveloper: true
    }
]

const ordenada = lista.sort((a,b)=> b.edad - a.edad)
console.log(ordenada)