import prismaClient from "../../prisma";

export interface ProductByCategoryRequest {
    id_categoria: string;
}

class ListByCategoryService {
    async execute({ id_categoria }: ProductByCategoryRequest) {
        const product = await prismaClient.produto.findMany({
            where: {
                id_categoria: id_categoria
            }
        });
        return product;
    }
}

export { ListByCategoryService };

