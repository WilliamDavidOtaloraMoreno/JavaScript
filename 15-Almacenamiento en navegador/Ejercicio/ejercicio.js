const nombre = "William"
const apellido = "Otalora"

const persona = {
    nombre,
    apellido
}

sessionStorage.setItem("persona", JSON.stringify(persona))
localStorage.setItem("persona", JSON.stringify(persona))

const caducar = new Date()

document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(caducar.getTime() + 2 * 60000)}`