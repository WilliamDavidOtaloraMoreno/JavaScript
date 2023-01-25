const compras = ["Cafe","Pasta","Arroz","Papas","Aceite"];

compras.push("Aceite de Girasol")
console.log(compras)

compras.pop()
console.log(compras)

peliculasFavoritas = [
    {
        titulo: "El origen",
        director: "Christopher Nolan",
        fecha: new Date(2010,08,06)
    },
    {
        titulo: "Proyecto X",
        director: "Nima Nourizadeh",
        fecha: new Date(2012,03,16)
    },
    {
        titulo: "Gato con botas: el último deseo",
        director: "Joel Crawford",
        fecha: new Date(2022,12,08)
    }
]

const peliculasNuevas = peliculasFavoritas.filter(obj => obj.fecha > new Date(2010,0,1))
console.log(peliculasNuevas)

const directores = peliculasFavoritas.map(obj =>{
    return obj.director
})
console.log(directores)

const titulos = peliculasFavoritas.map(obj =>{
    return obj.titulo
})
console.log(titulos)

const listaConcat = directores.concat(titulos)
console.log(listaConcat)

const listaPropa = [...directores, ...titulos]
console.log(listaPropa)


