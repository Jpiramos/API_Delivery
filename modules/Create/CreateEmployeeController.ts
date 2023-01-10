import {Request, Response} from 'express'

import { CreateEmployeeUseCase } from './CreateEmployeeUseCase'
export class CreateEmployeeController {
    async handle(request: Request, response: Response) {
        const {name, occupation, cpf} = request.body
        const createEmployeeUseCase = new CreateEmployeeUseCase();

        try{
            const result = createEmployeeUseCase.execute({
                name,
                occupation,
                cpf
            })
            return response.json(result)
        } catch (error: any) {
          return response.json({ message: error.message})
        }
    }
}