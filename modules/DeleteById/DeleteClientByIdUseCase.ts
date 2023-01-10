import { prisma } from "../../database/prismaClient";

export class DeleteClientByIdUseCase{
    async execute(id:string){
        const clienteDelete = await prisma.clients.delete({
            where:{
                id:id  
            }
        })
        return clienteDelete
    }
}