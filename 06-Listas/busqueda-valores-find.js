//Iterar los valores de una lista
const array = ["hola",2,5,90,false,undefined]

//Forma antigua y poco eficiente
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

//Forma ES6 (mas eficiente) .forEach()
let suma = 0;
const arrayNums = [3,6,2,77,2,3,93,19]
arrayNums.forEach(valor =>{
    suma += valor;
    console.log(valor)
})
console.log(suma)

//Busqueda de un valor dentro de una lista .find()
//Quiero encontrar el elemento 90
const variable = array.find(valor =>{
    if(valor === 90){
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "David", edad: 20},
    {nombre: "William", edad: 15},
    {nombre: "Laura", edad: 10},
    {nombre: "Luis", edad: 18}
]

// const objeto = listaObjetos.find(o =>{
//     if(o.nombre === "David"){
//         return true
//     }
// })
const objeto = listaObjetos.find(o => o.nombre === "David")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "David")
console.log(edad)