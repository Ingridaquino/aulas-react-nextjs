export default function Repeticao() {
    
    const listaAprovados = [
        'Amora',
        'Miguel',
        'Davi',
        'Larissa',
        'Ana Clara',
        'Sofia',
        'David'
    ]

    function rederizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li> );
    }
    

    return (
        <ul>
            {rederizarLista()}
        </ul>
    )

}


//Exemplo 

/**
 * function renderizarLista() {
        
        const item = []

        for(let i = 0; i < listaAprovados.length; i++){
            item.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return item
    }
 */