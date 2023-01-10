import { Request,Response } from "express";
import {DeleteClientByIdUseCase} from "./DeleteClientByIdUseCase";

export class DeleteClientByIdController{
    async handle(request:Request,response:Response){

        const {id} = request.params
        const deleteClient = new DeleteClientByIdUseCase();

        const clients = await deleteClient.execute(id)
        return response.json(clients)



    }
}