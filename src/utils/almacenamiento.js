/* const {setItem, getItem, clear} = localStorage */

export function guardar(clave, valor) {
    if (typeof valor !== "string") {
        valor = JSON.stringify(valor)
    }
    localStorage.setItem(clave, valor)
    return true
}
export function obtener(clave) {
    return  localStorage.getItem(clave)
}
export function limpiar() {
    localStorage.clear()
}

