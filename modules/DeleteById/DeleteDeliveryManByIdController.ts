import { Request,Response } from "express";
import {DeleteDeliveryManByIdUseCase} from "./DeleteDeliveryManByIdUseCase";

export class DeleteDeliveryManByIdController{
    async handle(request:Request,response:Response){

        const {id} = request.params
        const deleteDeliverMan = new DeleteDeliveryManByIdUseCase();

        const DeliverMan = await deleteDeliverMan.execute(id)
        return response.json(DeliverMan)



    }
}