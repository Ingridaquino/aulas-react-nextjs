export default function Filho(props) {
    return (
        <div>
            <h3>Filho</h3>
            <button onClick={() => props.funcao("Passei no Enem")}>
                Entrando em contato com o Pai
            </button>

            <button className="button" onClick={() => props.funcao("Passei no Enem", "Uhuuuu")}>
                Entrando em contato com o Pai
            </button>

        </div>
    )
}