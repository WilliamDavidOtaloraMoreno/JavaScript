// .sort() -> MODIFICA EL ARRAY
const array = [2,5,9,15,1,2,0,4]
console.log(array)

array.sort((a,b)=>{
    if(a < b){
        return +1
    }else if (a > b){
        return -1
    }else{
        return 0
    }
})

console.log(array)

//Ordenar unicamente arrays numericos
const arrayNumerico = [4,1,2,5,4,6,569,58]

arrayNumerico.sort((a,b)=> a-b)
console.log(arrayNumerico)

//Interesante en arrays de objetos
const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "David", edad: 20},
    {nombre: "William", edad: 15},
    {nombre: "Laura", edad: 10},
    {nombre: "Luis", edad: 18}
]

// listaObjetos.sort((a,b)=>{
//     if(a.edad < b.edad){
//         return -1
//     }else if(a.edad > b.edad){
//         return +1
//     }else{
//         return 0
//     }
// })

listaObjetos.sort((a,b)=>a.edad - b.edad)
console.log(listaObjetos)