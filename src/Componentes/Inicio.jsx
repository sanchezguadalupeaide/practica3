import { useEffect } from "react"

export const Inicio = ({ perros, setPerros }) => {

    const traerPerro = async () => {
        let respuesta = await fetch('https://dog.ceo/api/breeds/list/all')
        let datos = await respuesta.json()

        const razas = Object.keys(datos.message);
        const razasAleatorias = [];

        while (razasAleatorias.length < 5) {
            const raza = razas[Math.floor(Math.random() * razas.length)];

            if (!razasAleatorias.includes(raza)) {
                razasAleatorias.push(raza);
            }
        }
        setPerros(razasAleatorias)
    }

    useEffect(() => {
        traerPerro()
    }, [])

    return <>
        <table border={3} align="center">
            <thead>
                <tr>
                    <th> Nombre </th>
                </tr>
            </thead>
            <tbody>
                {perros.map((elemento, indice) => {
                    return <tr key={indice}>
                        <th>{elemento}</th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}