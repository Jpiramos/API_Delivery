import { prisma } from '../../database/prismaClient'
import { hash } from 'bcrypt'

interface CreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: CreateClient) {

    // validar se o cliente existe
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals : username
        }
      }
    })

    if (clientExist) {
      throw new Error('Cliente existente')
      return
    }

    const hashPassword = await hash(password, 10)

    const data = {
      username,
      password: hashPassword
    }

    const client = await prisma.clients.create({ data })

    return client


  }

}