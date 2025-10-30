import { useState } from 'react'
import './App.css'
import { guardar, obtener, limpiar } from "./utils/almacenamiento";
import { obtenerDatos } from "./utils/llamadas"
import Swal from 'sweetalert2'
import { Tarjeta } from './componentes/Tarjeta';


export function App() {

    console.log("Renderizado...");


    const [personajes, setPersonajes] = useState(JSON.parse(obtener("personajes")))
    const [character, setCharacter] = useState({
        id: 0,
        name: "",
        image: ""
    })



    function handleSubmit(evento) {
        evento.preventDefault();
        console.log("evento?", evento.target[0].value);
        const nombre = evento.target[0].value

        const obtenido = personajes.filter(function (personaje) {
            return personaje.name.includes(nombre)
        })

        Swal.fire({
            text: `Hemos encontrado a ${obtenido[0].name}`,
            icon: "success"
        }).then(
            function (datos) {
                setCharacter(obtenido[0])
                console.log(datos);
            }
        )




    }

    return <>
        <form onSubmit={handleSubmit} role='search'>
            <input name='personaje' />
            <button>Buscar</button>
        </form>
        <section>
            {character.id > 0  && <Tarjeta datos={character} />}
        </section>
    </>
}
