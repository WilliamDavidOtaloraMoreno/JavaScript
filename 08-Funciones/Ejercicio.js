function devolverTrue(){
    return true;
}
console.log(devolverTrue())

async function miPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}
console.log(miPromesa())

function* generaPares() {
    let id = 0
    while(true) {
        yield id += 2
    }
}

const gen = generaPares();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
