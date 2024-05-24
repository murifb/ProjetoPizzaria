import prismaClient from "../../prisma";

export interface ProductRequest {
    nome: string;
    preco: string;
    descricao: string;
    banner: string;
    id_categoria: string;
}

class CreateProductService {
    async execute({ banner, descricao, id_categoria, nome, preco }: ProductRequest) {
        const product = await prismaClient.produto.create({
            data: {
                nome: nome,
                preco: preco,
                descricao: descricao,
                banner: banner,
                id_categoria: id_categoria
            }
        });
        return product;
    }
}

export { CreateProductService };

