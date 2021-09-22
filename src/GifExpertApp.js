import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"
export const GifExpertApp = () => {

    

    const [categorias, setCategorias] = useState(["Robotech"])

    // const agregarItem =(e) => {
    //     //setCategorias([...categorias, "La gata Loca"])

    //     setCategorias( cats => [...cats, "La Gata Loca"])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>            
            <hr/>
            <AddCategory setCategorias = { setCategorias }/>
        
            <ul>
            { categorias.map((category) => (
                <GifGrid key={category} category={category}/>
            ))}
            </ul>
        </div>
    )
}
