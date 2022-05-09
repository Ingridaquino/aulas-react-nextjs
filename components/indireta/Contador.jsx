import { Component } from "react";

export default class Contador extends Component {
    
    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    // função de incremento e decremendo

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    alterarPasso = (ev) => {
        this.setState({
            passo: +ev.target.value
        })
    }

    //PARTE DO SCRIP com formulario 
    renderForm() {
        return(
            <>
                <input type="number" min={10} max={1000}
                    value={this.state.passo}
                    onChange={this.alterarPasso} />
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </>
        )
    }
     

    render(){
        return (
            <div>
                <h1>Contador usando Class</h1>
                <h3>{this.state.numero}</h3>
                {this.renderForm()}
            </div> 
        )      
    }
}