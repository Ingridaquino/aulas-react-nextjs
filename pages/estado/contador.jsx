import { useState } from "react";
import NumeroDisplay from "../../components/estado/NumeroDisplay";

export default function contador() {
    let valor = 0;
    
    const [numero, setNumero] = useState(0)

    //Arrow func
   const inc = () => setNumero(numero + 1)

    function dec() {
        setNumero(numero - 1)
    }

    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero} />
            <div>
                <button onClick={inc}>+</button>
                <button onClick={dec}>-</button>
            </div>
        </div>
    )
}