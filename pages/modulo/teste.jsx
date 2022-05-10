import Padrao, 
    { Comp1, Comp2 as Blabla, Comp4, Comp5, Comp6} 
    from "../../components/modulos/funcionais"
// as para definir um apelido
// Function default fica fora das {chaves}

export default function teste(){
    return(
        <div>
            <Comp1 />
            <Blabla />
            <Padrao /> 
            <Comp4 msg="Legal!!" />
            <Comp5 />
            <Comp6 />

        </div>
    )
}