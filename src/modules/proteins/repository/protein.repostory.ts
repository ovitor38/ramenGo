import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { IProteinRepository } from 'src/repositoies/interfaces/protein.interface'
import { CreateProteinDto } from '../dto/create-protein.dto'
import { ProteinEntity } from '../entities/protein.entity'
import { UpdateProteinDto } from '../dto/update-protein.dto'

@Injectable()
export class ProteinRepository implements IProteinRepository {
  constructor(private prisma: PrismaService) {}

  async create(createProteinDto: CreateProteinDto): Promise<void> {
    await this.prisma.protein.create({
      data: createProteinDto
    })
  }
  async get(id: number): Promise<ProteinEntity> {
    return await this.prisma.protein.findUniqueOrThrow({ where: { id } })
  }
  async getAll(): Promise<ProteinEntity[]> {
    return await this.prisma.protein.findMany()
  }
  async update(id: number, updateProteinDto: UpdateProteinDto): Promise<void> {
    await this.prisma.protein.update({ where: { id }, data: updateProteinDto })
  }
  async delete(id: number): Promise<void> {
    await this.prisma.protein.delete({ where: { id } })
  }
}
