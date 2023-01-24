//Sesion 4 - Strings (cadenas de caracteres)
let str_dbl = "Hola soy un texto con comillas dobles";
let str_sng = 'Hola soy un texto con comillas simples';


console.log(str_dbl)
console.log(str_sng)

let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'"
let str_comillas_simples = 'El otro dia me dijo literalmente "ve a sacar la basura"'

console.log(str_comillas_dobles)
console.log(str_comillas_simples)

///// Comillas invertidas (backticks)
let str_backticks = `Hola esto es un string con backsticks`
console.log(str_backticks)

let nombre = "Lucas"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

//Plantillas HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un parrafo</p>
</html>
`;

console.log(plantilla)

//Introduccion de variables en HTML
let lista = ["Empieza por el por qué", "El monje que vendió su Ferrari", "El poder del ahora"]