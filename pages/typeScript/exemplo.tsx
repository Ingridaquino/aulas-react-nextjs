//tsx = typescript com react ;

import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return(
        <div>
            <Pessoa nome="Miguel" idade={29} />
            <Pessoa nome="Amora"  />
        </div>
    )
}