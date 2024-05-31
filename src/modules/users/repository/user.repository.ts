import { IUserRepository } from 'src/repositoies/interfaces/user.interface'
import { CreateUserDto } from '../dto/create-user.dto'
import { UpdateUserDto } from '../dto/update-user.dto'
import { PrismaService } from 'src/prisma.service'
import { Injectable } from '@nestjs/common'
import { UserModel } from '../models/user.model'

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<void> {
    await this.prisma.user.create({
      data: createUserDto
    })
  }
  async get(userId: string): Promise<UserModel> {
    return await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      select: { id: true, name: true, email: true }
    })
  }

  async getByEmail(email: string): Promise<UserModel> {
    return await this.prisma.user.findUniqueOrThrow({
      where: { email }
    })
  }

  async getAll(): Promise<UserModel[]> {
    return await this.prisma.user.findMany({
      select: { id: true, name: true, email: true }
    })
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    await this.prisma.user.update({ where: { id }, data: updateUserDto })
  }

  async delete(userId: string): Promise<void> {
    await this.prisma.user.delete({ where: { id: userId } })
  }
}
