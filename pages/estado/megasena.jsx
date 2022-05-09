import { useState, useEffect  } from "react";
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/estado/NumeroDisplay"


export default function megasena() {
   
    // Estado que representa a quantidade de numeros no array
    const [qtde, setQtde] = useState(6)

     // coloca o mega dentro do useState como numero inicial
    //Estado que representa os numeros do array
    const [numeros, setNumeros ] = useState([]);

    //Para a aplicação abrir com numeros já na tela

    useEffect(() =>{
        setNumeros(mega())
    }, [])
 
    function renderNumeros() {
        //Transformando um array numerico em um array numerico.jsx 
        return numeros.map(
            numero => <NumeroDisplay key={numero} numero={numero}/>)
    }

    return(
        <div style={{
           display:"flex",
           flexDirection:"column",
           justinfyContent:"center",
           alignItems:"center" 
        }}>
            <h1>Mega sena </h1>
            <div style={{
                display:"flex",
                flexWrap:"wrap",
                justifyContent:"center"
            }}>
                {renderNumeros()}
            </div>
              <input type="number" min={6} max={20} value={qtde}
              onChange={ev => setQtde(ev.target.value)} />
            <div>
                <button onClick={() => setNumeros(mega())}>
                    Gerar Aposta
                </button>
            </div>
        </div>
    )
}