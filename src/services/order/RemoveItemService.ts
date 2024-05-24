import prismaClient from "../../prisma";

export interface ItemRemoveRequest {
    id_item: string;
}

class RemoveItemService {
    async execute({ id_item }: ItemRemoveRequest) {
        const findItem = await prismaClient.item.findFirst({ where: { id: id_item } });
        if (!findItem) {
            throw new Error('Item informado não foi encontrado!');
        }

        const pedido = await prismaClient.pedido.findFirst({ where: { id: findItem.id_pedido } });
        if (!pedido.rascunho) {
            throw new Error('Item não pode ser removido!');
        }

        const item = await prismaClient.item.delete({ where: { id: id_item } });
        return item;
    }
}

export { RemoveItemService };

