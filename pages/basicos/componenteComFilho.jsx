import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return(
        <div>
            <Lista>
                <Item conteudo="Lista #1" />
                <Item conteudo="Lista #3" />
                <Item conteudo="Lista #7" />
            </Lista>

        </div>
    )
}