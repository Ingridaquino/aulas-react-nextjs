export default function Estilo(props) {
    
    const classEstilo = props.numero >= 1 ? "azul" : "vermelho";
    return (
        <div>
            <h1 style={ {
                backgroundColor: props.numero >= 0 ? "#D65DB1" : "#0089BA",
                color: props.color,
                textAlign: props.direita ? "right" : " center"
            }}>
                Texto #01
            </h1>

            <h2 className={classEstilo}>
                Subtitulo #1
            </h2>

            <span className={props.numero >= 1 ? "vermelho" : "azul"}>
                Texto #2
            </span>
        </div>
    )
}