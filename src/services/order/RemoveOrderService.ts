import prismaClient from "../../prisma";

export interface OrderRemoveRequest {
    id_pedido: string;
}

class RemoveOrderService {
    async execute({ id_pedido }: OrderRemoveRequest) {
        const order = await prismaClient.pedido.delete({ where: { id: id_pedido } });
        return order;
    }
}

export { RemoveOrderService };

