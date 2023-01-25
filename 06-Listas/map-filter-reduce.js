//Trabajar con metodos mas anvanzados
//  .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`)
console.log(newArray)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "David", edad: 20},
    {nombre: "William", edad: 15},
    {nombre: "Laura", edad: 10},
    {nombre: "Luis", edad: 18}
]
// const personasMayores = listaObjetos.filter(obj =>{
//     if(obj.edad > 30){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(personasMayores)
const personasMayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Leire")
console.log(nuevaLista)

const valores = [3,56,23,5,90,100]

const suma = valores.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})
console.log(suma)