export const Tarjeta = ({ datos }) => {
    const { name: nombre, image: imagen } = datos
    return <article className='personaje-encontrado'>
        <h3>{nombre}</h3>
        <img src={imagen} alt={nombre} />
    </article>
}