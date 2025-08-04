import { useEffect } from "react"

export const ResultadoBusqueda = ({buscarPerros, perros, setPerros}) =>{
    
    const traerPerro = async () => {
        try {
            const respuesta = await fetch(`https://dog.ceo/api/breed/${buscarPerros}/images/random`);
            const datos = await respuesta.json();

            if (datos.status === "success") {
                setPerros([buscarPerros]); // Guardás un array con un solo nombre
            } else {
                setPerros([]); // No se encontró
            }
        } catch (error) {
            console.error("Error en la búsqueda:", error);
            setPerros([]);
        }
    }

    useEffect(()=>{
        if (buscarPerros!==""){
             traerPerro()
        }
    }, [buscarPerros])

    return<>
        <table border={1} align="center" style={{ borderCollapse: "collapse", width: "60%" }}>
            <thead style={{ backgroundColor: "blue"}}>
                <tr>
                    <th> Nombre </th>
                </tr>
            </thead>
            <tbody>
                {perros.map((elemento, indice) => {
                    return <tr key={indice}>
                        <th >{elemento}</th>
                    </tr>
                })}
            </tbody>
        </table>
    </>
}