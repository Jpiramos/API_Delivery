import {Request,Response} from "express";
import { ListDeliveryManByIdUseCase } from "./ListDeliveryManByIdUseCase";

export class ListDeliveryManByIdController{
    async handle(request:Request,response:Response){
        const {id} = request.params
        const List = new ListDeliveryManByIdUseCase()
        const DeliveryMAN = await List.execute(id)

        return response.json(DeliveryMAN)
    }
}