export interface Promocao {
    id: number,
    destino: string,
    imagem: string,
    preco: number
}

export interface UnidadeFederativa {
    id: number,
    sigla: string,
    nome: string
}

export interface Depoimento {
    id: number,
    texto: string,
    autor: string,
    avatar: string
}