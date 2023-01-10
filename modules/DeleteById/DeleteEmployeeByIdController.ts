import { Request,Response } from "express";
import {DeleteEmployeeByIdUseCase} from "./DeleteEmployeeByIdUseCase";

export class DeleteEmployeeByIdController{
    async handle(request:Request,response:Response){

        const {id} = request.params
        const deleteEmployee = new DeleteEmployeeByIdUseCase();

        const clients = await deleteEmployee.execute(id)
        return response.json(clients)



    }
}