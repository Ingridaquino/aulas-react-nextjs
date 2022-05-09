export default function exempl4(){
   const subtitulo = "Estou no JavaScript!";

   const trechoNume = <h2>{3 + 6}</h2>

   
    return (
        <div>
            <h1>Integração JS & JSX</h1>
            <h2>{subtitulo}</h2>
            {trechoNume}
            <h3>{retorno(10, 5, 9)}</h3>

            <h4>{Math.min(33, 200)}</h4>

        </div>

    );
}

function retorno(valor, min, max){
    if(valor >= min && valor <= max){
        return "Sim"
    }else {
        return "Não"
    }
}