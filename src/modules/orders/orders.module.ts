import { Module } from '@nestjs/common'
import { OrdersService } from './orders.service'
import { OrdersController } from './orders.controller'
import { PrismaService } from 'src/prisma.service'
import { OrderRepository } from './repository/order.repository'
import { HttpModule } from '@nestjs/axios'

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [PrismaService, OrderRepository, OrdersService]
})
export class OrdersModule {}
