const nombre = "William"
const apellido = "Otalora"
const estudiante = nombre.concat(" ").concat(apellido)

let estudianteMayus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMayus)
console.log(estudianteMinus)

let estudianteLetras = estudiante.length
console.log(estudianteLetras)

let primeraLetra = nombre[0]
console.log(primeraLetra)

let ultimaLetra = apellido[apellido.length - 1]
console.log(ultimaLetra)

let sinEspacios = estudiante.replace(/ /g, "")
console.log(sinEspacios)

let boolNombre = estudiante.includes(nombre)
console.log(boolNombre)