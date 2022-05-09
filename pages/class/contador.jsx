import { Component } from "react";
import Contador from "../../components/indireta/Contador"

export default class ContadorPage extends Component {

    render() {
        return(
            <>     
                <Contador valorInicial={100} passo={30} />  
                <Contador  />      
            </>
        )
    }
}