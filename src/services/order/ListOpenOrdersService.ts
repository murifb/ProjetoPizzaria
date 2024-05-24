import prismaClient from "../../prisma";

class ListOpenOrdersService {
    async execute(startDate: string, endDate: string) {
        const pedidos = await prismaClient.pedido.findMany(
            {
                where: {
                    status: false,
                    rascunho: false,
                    criado_em: {
                        gte: new Date(startDate),
                        lte: new Date(endDate)
                    }
                },
            }
        );
        return pedidos;
    }
}

export { ListOpenOrdersService };

