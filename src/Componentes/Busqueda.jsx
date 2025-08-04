import { useRef } from "react"

export const Busqueda = ({ setBuscarPerro }) => {

    const inputRef = useRef()

    return <>
        <input type="text"
            placeholder="Ingrese una raza de perro"
            ref={inputRef} />
        <button onClick={() => { setBuscarPerro(inputRef.current.value) }}> Buscar </button>
    </>
}