import Titulo from  '../../components/Titulo'
import TituloDois from '../../components/TitulosDois'


export default function usandoTitulo() {
    return (
        <>
            <Titulo titulo="Meu Tempo" span="Vapo"/>

            <TituloDois titulo="True Love" span="4*TOWN" pequeno={true}/>

            <TituloDois titulo="True" span="4*TOWN"  />

        </>
    )
}