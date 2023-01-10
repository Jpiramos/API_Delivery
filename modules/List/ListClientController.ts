import { Request,Response } from "express";
import {ListClientUseCase} from "./ListClientUseCase";

export class ListClientController{
    async handle(request:Request,response:Response){
        const listClienteUseCase = new ListClientUseCase();
        const clients = await listClienteUseCase.execute()

        return response.json(clients)
    }
}