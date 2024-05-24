import prismaClient from "../../prisma";

export interface SendOrderRequest {
    order_id: string
}

class DetailsOrderService {
    async execute({ order_id }: SendOrderRequest) {
        let totalPagar = 0;
        let itens: { quantidade: number; produto: string; valUnit: number }[] = [];
        const pedido = await prismaClient.pedido.findFirst({
            where: { id: order_id },
            include: { items: true }
        });
        for (let item of pedido.items) {
            const produto = await prismaClient.produto.findFirst({ where: { id: item.id_produto } });
            totalPagar += Number(produto.preco) * item.quantidade;
            itens.push({ quantidade: item.quantidade, produto: produto.nome, valUnit: Number(produto.preco) });
        }
        return { totalPagar, itens };
    }
}

export { DetailsOrderService };

