//Metodos mas utilizados con cadenas de caracteres
//Como obtener la longitud de un string
let str = "Hola soy un string";
str.length
console.log(str.length)

//Obtener partes de cadenas de caracteres
//slice() substring() substr()
let slice_str = str.slice(5,10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

//Reemplazar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es William"
console.log(cadena)

//Al utilizar strings solo reemplaza la primera instancia
console.log(cadena.replace('William', 'David'))

let texto_largo = "Laboris adipisicing aute est officia. Consequat voluptate dolor minim incididunt incididunt reprehenderit. Minim aliquip dolore culpa sunt nisi velit commodo incididunt ex duis. Sunt non duis eu consectetur velit."

console.log(texto_largo.replace('incididunt', 'historia'))

//Al utilizar la expresion regular /g, reemplaza todas las instancias
console.log(texto_largo.replace(/incididunt/g, 'historia'))