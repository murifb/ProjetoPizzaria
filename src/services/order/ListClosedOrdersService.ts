import prismaClient from "../../prisma";

class ListClosedOrdersService {
    async execute(start: string, end: string) {
        const startDate: Date = new Date(start);
        const endDate: Date = new Date(end);
        const orders = await prismaClient.pedido.findMany({
            where: {
                status: true,
                rascunho: false,
                criado_em: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });
        return orders;
    }
}

export { ListClosedOrdersService };

