import { prisma } from "../../database/prismaClient";

export class ListDeliveryManUseCase{
    async execute(){
        const DeliveryManLIST = await prisma.deliveryMan.findMany({
            select:{
                id:true,
                username:true
            }
        })

        return DeliveryManLIST
    }
}