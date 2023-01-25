const fechaHoy = new Date()
console.log(fechaHoy)

const fechaNacimiento = new Date(2002,3,7)
console.log(fechaNacimiento)

const tarde = fechaHoy > fechaNacimiento
console.log(tarde)

const dia = fechaNacimiento.getDate()
console.log(dia)
const mes = fechaNacimiento.getMonth()+1
console.log(mes)
const año = fechaNacimiento.getFullYear()
console.log(año)
