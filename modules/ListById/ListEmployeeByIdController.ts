import {Request,Response} from "express";
import { ListEmployeeByIdUseCase } from "./ListEmployeeByIdUseCase";

export class ListEmployeeByIdController{
    async handle(request:Request,response:Response){
        const {id} = request.params
        const List = new ListEmployeeByIdUseCase()
        const Employee = await List.execute(id)

        return response.json(Employee)
    }
}