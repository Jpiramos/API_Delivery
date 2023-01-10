import {prisma} from "../../database/prismaClient";

export class ListEmployeeByIdUseCase{
    async execute (id:string){
        const employee = await prisma.employes.findMany({
            where:{
                id:id
            }
        })
        return employee;
    }
}