//Sets o conjuntos en castellano
const array = [1,2,3,4,5,1,1,1,"hola"]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// .add()
miSet.add("holiiiis")
console.log(miSet)

// .delete()
miSet.delete("hola")
console.log(miSet)

// .clear()
//miSet.clear()
//console.log()

// .has()
console.log(miSet.has(4))

// .size
console.log(miSet.size)

miSet.forEach(valor =>{
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)

const ar_miSet = [...it_miSet]
console.log(ar_miSet)
