import { prisma } from "../../database/prismaClient";

export class DeleteDeliveryManByIdUseCase{
    async execute(id:string){
        const DeliveryManDelete = await prisma.deliveryMan.delete({
            where:{
                id:id  
            }
        })
        return DeliveryManDelete
    }
}