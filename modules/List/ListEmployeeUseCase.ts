import { prisma } from "../../database/prismaClient";

export class ListEmployeeUseCase{
    async execute(){
        const EmployeeLIST = await prisma.employes.findMany({
            select:{
                id:true,
                name:true
            }
        })

        return EmployeeLIST
    }
}