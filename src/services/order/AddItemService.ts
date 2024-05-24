import prismaClient from "../../prisma";

export interface ItemRequest {
    quantidade: number;
    id_produto: string;
    id_pedido: string;
}

class AddItemService {
    async excute({ id_pedido, id_produto, quantidade }: ItemRequest) {
        const item = await prismaClient.item.create({
            data:
            {
                quantidade: quantidade,
                id_pedido: id_pedido,
                id_produto: id_produto
            }
        });
        return item;
    }
}

export { AddItemService };

