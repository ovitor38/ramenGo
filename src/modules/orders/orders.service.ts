import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { OrderRepository } from './repository/order.repository'
import { IOrderRepository } from 'src/repositoies/interfaces/order.interface'
import { fetchApiData } from 'src/adapters/consuperApi/consumer.adapter'
import {
  entityType,
  genericSuccessfulyMessage,
  methodType
} from 'src/helpers/response/response-messages/messages'
import { OrderEntity } from './entities/order.entity'
import { PrismaCodeError } from 'src/errors/prisma.errors'

@Injectable()
export class OrdersService {
  constructor(
    @Inject(OrderRepository)
    private orderRepository: IOrderRepository
  ) {}
  async create(
    createOrderDto: CreateOrderDto,
    apiKey: string,
    userId: string
  ): Promise<string> {
    try {
      const id = await fetchApiData(apiKey)

      const orderData = { id, ...createOrderDto, userId }
      await this.orderRepository.create(orderData)
      return genericSuccessfulyMessage(entityType.ORDER, methodType.CREATED)
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findAll(): Promise<OrderEntity[]> {
    try {
      return await this.orderRepository.getAll()
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findOne(id: string): Promise<OrderEntity> {
    try {
      return await this.orderRepository.get(id)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<string> {
    try {
      await this.orderRepository.update(id, updateOrderDto)
      return genericSuccessfulyMessage(entityType.ORDER, methodType.UPDATED)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(
          error.message.slice(error.message.lastIndexOf('An')).trim()
        )
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.orderRepository.delete(id)
      return genericSuccessfulyMessage(entityType.ORDER, methodType.DELETED)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(
          error.message.slice(error.message.lastIndexOf('An')).trim()
        )
      }
      throw new InternalServerErrorException(error.message)
    }
  }
}
