import style from './tabuleiro.module.css'


function gerador(numero = 8) {
    const quadrado = []

    for(let i = 1; i <= numero; i++ ){
        quadrado.push(<span>{i}</span>)
    }

    return quadrado;
}


export default function criandoTabuleiro() {

    return (
        <div className={style.div}>
            <div>
                {gerador()}
            </div>
        </div>
    )
}