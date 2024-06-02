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

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  @UseGuards(AuthGuard)
  async create(
    @Body() createOrderDto: CreateOrderDto,
    @Headers('x-api-key') apiKey: string,
    @Req() req:Request
  ) {
    const userId: string = req["user"].sub;
    return successResponseBody(
      await this.ordersService.create(createOrderDto, apiKey, userId)
    )
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  async findAll(): Promise<ISuccessfullyResponse<OrderEntity[]>> {
    return successResponseBody(await this.ordersService.findAll())
  }

  @Get(':id')
  @UseGuards(ApiKeyGuard)
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<OrderEntity>> {
    return successResponseBody(await this.ordersService.findOne(id))
  }

  @Patch(':id')
  @UseGuards(ApiKeyGuard)
  async update(
    @Param('id') id: string,
    @Body() updateOrderDto: UpdateOrderDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.ordersService.update(id, updateOrderDto)
    )
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.ordersService.remove(id))
  }
}
