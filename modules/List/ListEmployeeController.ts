import { Request,Response } from "express";
import {ListEmployeeUseCase} from "./ListEmployeeUseCase";

export class ListEmployeeController{
    async handle(request:Request,response:Response){
        const listEmployeeUseCase = new ListEmployeeUseCase();
        const Employeee = await listEmployeeUseCase.execute()

        return response.json(Employeee)
    }
}