let selector = "root"
const contenedor = document.querySelector(`#${selector}`)

const imagen = `https://static.vecteezy.com/system/resources/previews/001/265/903/non_2x/cartoon-fruits-set-vector.jpg`
const listadoFrutas = `<img src='${imagen}' alt='frutas' title='frutas'>`

contenedor.insertAdjacentHTML("afterbegin", listadoFrutas)