export function Comp1(){
    return <h2>Comp #1</h2>
}

//Quando exportar por padrão(default) não importa muito o nome da function

export const Comp2 = function() {
    return <h2>Comp #2</h2>
}


export default function Comp3(){
    return(
        <div>
            <h2>Comp #3</h2>
        </div>
    )
}

export const Comp4 = props => <h2>Comp #4 - {props.msg}</h2>

export const Comp5 = () => {
    return <h2>Comp #4</h2>
} 


export const Comp6 = () => (
    <div>
        <h2>Comp #6 </h2>
    </div>
)


