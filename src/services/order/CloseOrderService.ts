import prismaClient from "../../prisma";

export interface SendOrderRequest {
    order_id: string;
}

class CloseOrderService {
    async execute({ order_id }: SendOrderRequest) {
        const order = prismaClient.pedido.update({
            where: { id: order_id },
            data: { status: true }
        });
        return order;
    }
}

export { CloseOrderService };

