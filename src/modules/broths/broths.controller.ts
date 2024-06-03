import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards
} from '@nestjs/common'
import { BrothsService } from './broths.service'
import { CreateBrothDto } from './dto/create-broth.dto'
import { UpdateBrothDto } from './dto/update-broth.dto'
import {
  ISuccessfullyResponse,
  successResponseBody,
  successResponseMessage
} from 'src/helpers/response/http-response'
import { BrothEntity } from './entities/broth.entity'
import { ApiKeyGuard } from '../auth/api-key.guard'
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { MessageResponseModel } from 'src/models/message.response'
import { ForbiddenExceptionModel } from 'src/errors/models/forbidden-exception.model'
import { BrothModelResponse } from './models/broth-response.model'

@Controller('broths')
@ApiTags('Broths')
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
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new broth record' })
  @ApiResponse({
    status: 200,
    description: 'Create a new broth record with the data of body',
    type: MessageResponseModel
  })
  async create(
    @Body() createBrothDto: CreateBrothDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.brothsService.create(createBrothDto)
    )
  }

  @Get()
  @ApiOperation({ summary: 'Returns an array of all broths records' })
  @ApiResponse({
    status: 200,
    type: [BrothEntity],
    description: 'Return all broth records'
  })
  async findAll(): Promise<BrothEntity[]> {
    return await this.brothsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns broth of the referenced id' })
  @ApiResponse({
    status: 200,
    type: BrothModelResponse,
    description: 'Returns broth of the referenced id'
  })
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<BrothEntity>> {
    return successResponseBody(await this.brothsService.findOne(id))
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the broth record with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Update the broth record with the referenced id',
    type: MessageResponseModel
  })
  async update(
    @Param('id') id: string,
    @Body() updateBrothDto: UpdateBrothDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.brothsService.update(id, updateBrothDto)
    )
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the broth record with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Delete the broth record with the referenced id',
    type: MessageResponseModel
  })
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.brothsService.remove(id))
  }
}
