//Typescript 
//TS só agrega valor ao projeto


interface PessoaProps {
    nome: string
    idade?: number // ?(defini) indica que não é obrigatorio
}


export default function Pessoa(props: PessoaProps ) {
    return(
        <div>
            <div>Nome: {props.nome} </div>
            <div>Idade: {props.idade ?? "Não informada"}</div>
        </div>
    )
}