import { Injectable } from '@nestjs/common'
import { IBrothRepository } from 'src/repositoies/interfaces/broth.interface'
import { CreateBrothDto } from '../dto/create-broth.dto'
import { UpdateBrothDto } from '../dto/update-broth.dto'
import { BrothEntity } from '../entities/broth.entity'
import { PrismaService } from 'src/prisma.service'

@Injectable()
export class BrothRepository implements IBrothRepository {
  constructor(private prisma: PrismaService) {}

  async create(createBrothDto: CreateBrothDto): Promise<void> {
    await this.prisma.broth.create({
      data: createBrothDto
    })
  }
  async get(id: number): Promise<BrothEntity> {
    return await this.prisma.broth.findUniqueOrThrow({ where: { id } })
  }
  async getAll(): Promise<BrothEntity[]> {
    return await this.prisma.broth.findMany()
  }
  async update(id: number, updateDto: UpdateBrothDto): Promise<void> {
    await this.prisma.broth.update({ where: { id }, data: updateDto })
  }
  async delete(id: number): Promise<void> {
    await this.prisma.broth.delete({ where: { id } })
  }
}
