import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { IOrderRepository } from 'src/repositoies/interfaces/order.interface'
import { UpdateOrderDto } from '../dto/update-order.dto'
import { OrderEntity } from '../entities/order.entity'

@Injectable()
export class OrderRepository implements IOrderRepository {
  constructor(private prisma: PrismaService) {}

  async create(orderData: OrderEntity): Promise<void> {
    await this.prisma.order.create({ data: orderData })
  }

  async get(id: string): Promise<OrderEntity> {
    return await this.prisma.order.findUniqueOrThrow({ where: { id } })
  }

  async getAll(): Promise<OrderEntity[]> {
    return await this.prisma.order.findMany()
  }

  async update(id: string, updateDto: UpdateOrderDto): Promise<void> {
    await this.prisma.order.update({ where: { id }, data: updateDto })
  }

  async delete(id: string): Promise<void> {
    await this.prisma.order.delete({ where: { id } })
  }
}
