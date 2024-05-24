import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(req: Request, res: Response) {
        const { id_pedido, id_produto, quantidade } = req.body;
        const addItemService = new AddItemService();
        const item = await addItemService.excute({ id_pedido, id_produto, quantidade });
        return res.json(item);
    }
}

export { AddItemController };

