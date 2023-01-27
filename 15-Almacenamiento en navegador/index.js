//localStorage.setItem("nombre","William")
//localStorage.setItem("nombre","David")

// console.log(localStorage.getItem("nombre"))

//localStorage.setItem("persona", JSON.stringify({nombre:"William",edad:32}))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify = convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "William")

/* Cookies */

document.cookie = "nombreCookie=WilliamCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2023,2,1).toUTCString()

console.log(document.cookie)
