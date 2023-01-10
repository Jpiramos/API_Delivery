import {prisma} from "../../database/prismaClient";

export class ListClientByIdUseCase{
    async execute (id:string){
        const clients = await prisma.clients.findMany({
            where:{
                id:id
            }
        })
        return clients;
    }
}