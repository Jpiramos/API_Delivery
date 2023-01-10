import {Request, Response} from 'express'

import { CreateClientUseCase } from './CreateClientUseCase'
export class CreateClientController {
    async handle(request: Request, response: Response) {
        const {username, password} = request.body
        const createClientUseCase = new CreateClientUseCase();

        try{
            const result = createClientUseCase.execute({
                username,
                password
            })
            return response.json(result)
        } catch (error: any) {
          return response.json({ message: error.message})
        }
    }
}