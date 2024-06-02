import { OrderEntity } from 'src/modules/orders/entities/order.entity'
import { ICrudRepository } from './crud.interface'
import { UpdateOrderDto } from 'src/modules/orders/dto/update-order.dto'
import { OrderResponse } from 'src/modules/orders/repository/interfaces/response.interface'

export interface IOrderRepository extends ICrudRepository<OrderEntity, OrderEntity, UpdateOrderDto, OrderResponse> {}
