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
import { ProteinsService } from './proteins.service'
import { CreateProteinDto } from './dto/create-protein.dto'
import { UpdateProteinDto } from './dto/update-protein.dto'
import {
  ISuccessfullyResponse,
  successResponseBody,
  successResponseMessage
} from 'src/helpers/response/http-response'
import { ProteinEntity } from './entities/protein.entity'
import { ApiKeyGuard } from '../auth/api-key.guard'
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { ForbiddenExceptionModel } from 'src/errors/models/forbidden-exception.model'
import { MessageResponseModel } from '../../models/message.response'
import { ProteinModelResponse } from './models/protein-response.model'

@Controller('proteins')
@ApiTags('Proteins')
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
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new protein record' })
  @ApiResponse({
    status: 200,
    description: 'Create a new protein record.',
    type: MessageResponseModel
  })
  async create(
    @Body() createProteinDto: CreateProteinDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.proteinsService.create(createProteinDto)
    )
  }

  @Get()
  @ApiOperation({ summary: 'Returns all proteins records' })
  @ApiResponse({
    status: 200,
    type: [ProteinEntity],
    description: 'Returns all proteins records'
  })
  async findAll(): Promise<ProteinEntity[]> {
    return await this.proteinsService.findAll()
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns the protein record of the referenced id' })
  @ApiResponse({
    status: 200,
    type: ProteinModelResponse,
    description: 'Returns the protein record of the referenced id'
  })
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<ProteinEntity>> {
    return successResponseBody(await this.proteinsService.findOne(+id))
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update the protein record with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Update the protein record with the referenced id.',
    type: MessageResponseModel
  })
  async update(
    @Param('id') id: string,
    @Body() updateProteinDto: UpdateProteinDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.proteinsService.update(+id, updateProteinDto)
    )
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the protein record with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'Delete the protein record with the referenced id',
    type: MessageResponseModel
  })
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.proteinsService.remove(+id))
  }
}
