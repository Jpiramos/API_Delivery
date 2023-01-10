import {Request,Response} from "express";
import { ListClientByIdUseCase } from "./ListClientByIdUseCase";

export class ListClientByIdController{
    async handle(request:Request,response:Response){
        const {id} = request.params
        const List = new ListClientByIdUseCase()
        const clients = await List.execute(id)

        return response.json(clients)
    }
}