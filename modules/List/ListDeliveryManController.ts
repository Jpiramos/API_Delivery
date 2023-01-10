import { Request,Response } from "express";
import {ListDeliveryManUseCase} from "./ListDeliveryManUseCase";

export class ListDeliveryManController{
    async handle(request:Request,response:Response){
        const listDeliveryManUseCase = new ListDeliveryManUseCase();
        const DeliveryMAN = await listDeliveryManUseCase.execute()

        return response.json(DeliveryMAN)
    }
}