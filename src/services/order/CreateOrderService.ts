import prismaClient from "../../prisma";

export interface OrderRequest {
    mesa: number;
    nome: string;
}

class CreateOrderService {
    async excute({ mesa, nome }: OrderRequest) {
        const order = await prismaClient.pedido.create({
            data: {
                mesa: mesa,
                nome: nome
            }
        });
        return order;
    }
}

export { CreateOrderService };

