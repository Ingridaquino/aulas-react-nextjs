import { useState } from "react"

export default function mudarDeCor() {
    const estilo = {
        backgroundColor:"#ccc",
        height:"100vh",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }

    const [cor, setCor] = useState(0)

    function azul() {
        
        fundo.style.backgroundColor = "blue"
    }

    function vermelho() {
        backgroundColor:"red"
    }

    return(
        <div className="fundo" style={estilo}>
            <h1>Mundado de Cor</h1>
            <button onClick={azul}>Azul</button>
            <button onClick={vermelho}>Vermelho</button>
        </div>
    )
}