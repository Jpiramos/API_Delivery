import { prisma } from "../../database/prismaClient";

export class DeleteEmployeeByIdUseCase{
    async execute(id:string){
        const employeeDelete = await prisma.employes.delete({
            where:{
                id:id  
            }
        })
        return employeeDelete
    }
}