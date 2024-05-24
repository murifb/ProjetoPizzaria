import prismaClient from "../../prisma";

export interface SendOrderRequest {
    order_id: string;
}

class SendOrderService {
    async execute({ order_id }: SendOrderRequest) {
        const order = prismaClient.pedido.update({
            where: { id: order_id },
            data: { rascunho: false }
        });
        return order;
    }
}

export { SendOrderService };

