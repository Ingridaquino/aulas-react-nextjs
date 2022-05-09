import novaLista from "../../data/novaLista"

export default function novoRepeticao() {

    function renderizacaoProduto() {
        return novaLista.map(produ => {
            return (
                <tr key={produ.id}>
                    <td>{produ.id}</td>
                    <td>{produ.produto}</td>
                    <td>{produ.marca}</td>
                    <td>{produ.preco}</td>
                </tr>
            )
        })
    }

    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Produto</th>
                        <th>Marca</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {renderizacaoProduto()}
                </tbody>
            </table>
        </>
    )
}