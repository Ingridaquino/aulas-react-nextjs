export default function TituloDois(props) {

    return props.pequeno ? (
        <>
            <p>{props.titulo}</p>
            <p>{props.span}</p>
        </>
    ) : (
        <>
            <h1>{props.titulo}</h1>
            <span>{props.span}</span>
        </>
    )
}