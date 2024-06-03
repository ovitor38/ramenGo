import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Headers,
  Req
} from '@nestjs/common'
import { OrdersService } from './orders.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { UpdateOrderDto } from './dto/update-order.dto'
import { ApiKeyGuard } from '../auth/api-key.guard'
import { AuthGuard } from '../auth/auth.guard'
import {
  ISuccessfullyResponse,
  successResponseBody,
  successResponseMessage
} from 'src/helpers/response/http-response'
import { OrderEntity } from './entities/order.entity'
import { Request } from 'express'
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { MessageResponseModel } from 'src/models/message.response'
import { ForbiddenExceptionModel } from 'src/errors/models/forbidden-exception.model'
import { OrderModelResponse } from './models/order-response.model'

@Controller('orders')
@ApiTags('Orders')
@UseGuards(ApiKeyGuard)
@ApiHeader({
  name: 'x-api-key',
  description: 'API key required',
  required: true
})
@ApiResponse({
  status: 500,
  description: 'Internal Server Error',
  type: MessageResponseModel
})
@ApiResponse({
  status: 403,
  description: 'Api-key is missing',
  type: ForbiddenExceptionModel
})
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new order record' })
  @ApiResponse({
    status: 200,
    description:
      'Create a new order record with the data of body and userId extract from JWT',
    type: MessageResponseModel
  })
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Headers('x-api-key') apiKey: string,
    @Req() req: Request
  ) {
    const userId: string = req['user'].sub
    return successResponseBody(
      await this.ordersService.create(createOrderDto, apiKey, userId)
    )
  }

  @Get()
  @ApiOperation({ summary: 'Returns an array of all orders records' })
  @ApiResponse({
    status: 200,
    type: [OrderModelResponse],
    description: 'Return all orders records'
  })
  async findAll(): Promise<ISuccessfullyResponse<OrderEntity[]>> {
    return successResponseBody(await this.ordersService.findAll())
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns order of the referenced id' })
  @ApiResponse({
    status: 200,
    type: OrderModelResponse,
    description: 'Returns order of the referenced id'
  })
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<OrderEntity>> {
    return successResponseBody(await this.ordersService.findOne(id))
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the broth order with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Update the order record with the referenced id',
    type: MessageResponseModel
  })
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.ordersService.update(id, updateOrderDto)
    )
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the order record with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Delete the order record with the referenced id',
    type: MessageResponseModel
  })
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.ordersService.remove(id))
  }
}
