import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import personajesLista from "./data/personajes.json"
import { guardar, obtener, limpiar } from "./utils/almacenamiento";


/* import { personajes } from "./data/personajes"; */

export function App() {

  function btnLimpiar() {
    limpiar()

  }

  return (
    <Fragment>
      <button onClick={btnLimpiar}>Limpiar todo</button>

      {personajesLista.map(
        function (personaje) {
          const { id, name, image: imagen, species: raza,  status: estado } = personaje
          return <Tarjeta key={id} nombre={name} imagen={imagen} raza={raza} condicion={estado} />
        }
      )}
    </Fragment>
  )
}

export const Tarjeta = (propiedades) => {
  /* unknown. Alive, Dead */
  const { nombre, imagen, raza, condicion } = propiedades
  const [estado, cambiarEstado] = useState(obtener(nombre));

  function handleClick() {
    /* const nuevoEstado = estado === "vivo" ? "muerto" : "vivo"
    cambiarEstado(nuevoEstado) */
    cambiarEstado(
      function (nuevoEstado) {
        const dato = nuevoEstado === "Alive" ? "Dead" : "Alive"
        guardar(propiedades.nombre,dato)
        return dato
      }
    )
  }


  return (
   <article className="card">
        <div className="">
          <img src={imagen} alt={nombre} />
        </div>
        <div className="">
          <div className="">
            <h2>{nombre}</h2>
            <span 
              className=
              {`status-${
                obtener(nombre)  === "Dead" 
              ? "muerto" : "vivo"}`}
            >
              {estado === "Alive" ? "vivo" : "muerto"} - {raza} 
            </span>
          </div>
          <button onClick={handleClick}>Cambio de estado</button>
        </div>
      </article>
  );
}


export function Cabecera(propiedades) {
  const { nombre, edad } = propiedades
  return (
    <>
      <h1>Hola a todos soy {nombre}, tengo {edad} años!</h1>
    </>
  );
}


