import { OrderEntity } from 'src/modules/orders/entities/order.entity'
import { ICrudRepository } from './crud.interface'
import { UpdateOrderDto } from 'src/modules/orders/dto/update-order.dto'

export interface IOrderRepository extends ICrudRepository<OrderEntity, OrderEntity, UpdateOrderDto> {}
