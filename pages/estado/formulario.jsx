import { useState } from "react"

export default function formulario() {

    const [valor, setValor] = useState("Inicial")

    //Para conseguir digitar no input controlado, precisa alterar o estado antes.

    //Função para fazer a alteração
    function alterarInput() {
        setValor(valor + "!")
    }

    return(
        //Input component não controlado
        //Para torna o input controlado, basta vincular no Value com o (valor) relacionado ao UseState
        <div>
            <input type="text" valeu={valor}/> 
            <button onClick={alterarInput}>Alterar</button>
        </div>
    )
}