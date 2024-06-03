import { ApiProperty } from '@nestjs/swagger'
import { OrderEntity } from '../entities/order.entity'

export class OrderModelResponse {
  @ApiProperty({ default: 200 })
  statusCode: number

  @ApiProperty({ description: 'The broth data', type: OrderEntity })
  result: OrderEntity
}
