import {prisma} from "../../database/prismaClient";

export class ListDeliveryManByIdUseCase{
    async execute (id:string){
        const DeliveryMAN = await prisma.deliveryMan.findMany({
            where:{
                id:id
            }
        })
        return DeliveryMAN;
    }
}