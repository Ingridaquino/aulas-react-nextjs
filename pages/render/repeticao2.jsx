import listaProduto from "../../data/listaProduto"

export default function repeticao2() {

    const borda = {
        border: "1px solid #000",
    }
    
    function renderizarProdutos(props) {

        return listaProduto.map(produ => {
            return (
                <tr key={produ.id} >
                    <td style={borda}>{produ.id}</td>
                    <td style={borda}>{produ.nome}</td>
                    <td style={borda}>{produ.preco}</td>
                </tr>
            )
        })
    }
    return(
        <>
            <table style={borda}>
                <thead>
                    <tr>
                        <th style={borda}>Código</th>
                        <th style={borda}>Produto</th>
                        <th style={borda}>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {renderizarProdutos()}
                </tbody>
            </table>
        
        </>
    )
}