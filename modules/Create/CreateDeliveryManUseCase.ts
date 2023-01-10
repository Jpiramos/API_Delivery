import { prisma } from '../../database/prismaClient'
import { hash } from 'bcrypt'

interface CreateDeliveryMan {
  username: string;
  password: string;
}

export class CreateDeliveryManUseCase {
  async execute({ username, password }: CreateDeliveryMan) {

    // validar se o Entregador existe
    const DeliveryManExist = await prisma.deliveryMan.findFirst({
      where: {
        username: {
          equals : username
        }
      }
    })

    if (DeliveryManExist) {
      throw new Error('Entregador existente')
      return
    }

    const hashPassword = await hash(password, 10)

    const data = {
      username,
      password: hashPassword
    }

    const deliveryMan = await prisma.deliveryMan.create({ data })

    return deliveryMan

  }

}