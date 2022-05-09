 export function mega(quantidade = 6, numeros = []) {
    let  qtde = +quantidade // garantindo que seja um numero e não string
    //qtde = 6 caso o usuario não informe a quantidade de numeros à ser sorteados.
    if(qtde < 6 && qtde > 60){
        throw "Quantidade inválida!"
    }

    if(numeros.length === qtde) {
        //Sort() é uma formula para ordenar, mas para isso precisa passar uma funcao dentro dos()
        //nesse caso a baixo a funcao é ordenar do menor para o maior. 
        return numeros.sort((n1, n2) => n1 - n2)
    }

    //Math.random ele irá  gerar os numeros, esse + 1 é para que ele gere os numeros do 1 ao 60
    //parseInt irá converter para numeros inteiros
    const numeroAleatorio = parseInt(Math.random() * 60) + 1

//se o numeros aleatorios não pertence a lista de numeros[], quer dizer que posso adicionar um numero aleatorio
    if(!numeros.includes(numeroAleatorio)) {
        //Retornar a mega para que ela gere o numero, e nos parametros a quantidade à de numeros  ser sorteados, gerar um novo array (numeros[]), mais o numero aleatorio que não pertence ao numeros para que não tenham numeros repetidos
        return mega(qtde, [...numeros, numeroAleatorio])
    }else {
        return mega(qtde, numeros)
    }
}
