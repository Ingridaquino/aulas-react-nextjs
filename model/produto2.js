/**
 * Observe que:

não precisamos retornar nada
as propriedades são definidas com this
é usado = ao invés de : para atribuir
as linhas são separadas por ;
ao criar os produtos usamos o new
A sintaxe anterior é a maneira correta de definir a estrutura para seus objetos e é chamada de construtor. Essa estrutura comum dos objetos muitas vezes é chamada de classe.

Na nova versão da linguagem JavaScript, o EcmaScript 2015, há uma outra maneira de criar um construtor (e a classe):
 */




export default class Produtos2 {
    #id
    #produto
    #marca
    #preco

    constructor(id, produto, marca, preco) {
        this.#id = id
        this.#produto = produto
        this.#marca = marca
        this.#preco = preco
    }

    get id() {
        return this.#id
    }

    get produto() {
        return this.#produto
    }

    get marca() {
        return this.#marca
    }
    get preco() {
        return this.#preco
    }


}

