import { prisma } from '../../database/prismaClient'
import { hash } from 'bcrypt'

interface CreateEmployee{
  name: string;
  occupation: string;
  cpf: string;
}

export class CreateEmployeeUseCase {
  async execute({ name, cpf,occupation }: CreateEmployee) {

    // validar se o Empregador existe
    const EmployeeExist = await prisma.employes.findFirst({
      where: {
        name: {
          equals : name
        },
        occupation:{
            equals: occupation
        }
      }
    })

    if (EmployeeExist) {
      throw new Error('Empregador existente')
      return
    }

    const hashcpf = await hash(cpf, 10)

    const data = {
      name,
      occupation,
      cpf: hashcpf
    }

    const Employee = await prisma.employes.create({ data })

    return Employee

  }

}