function geradorLista(final = 10){
    const lista = []
    for(let i = 1; i <= final; i++){
         lista.push(<span>{i},</span>) 
         //O método push adiciona valores a um array.
    }

    return lista;
}

export default function lista(){

    return(
        <div>
            <div>
                {geradorLista()}
            </div>

            <div>
                {geradorLista(15)}
            </div>

            <div>
                {geradorLista(20)}
            </div>

            <div>
                {geradorLista(44)}
            </div>
        </div>
    )
}