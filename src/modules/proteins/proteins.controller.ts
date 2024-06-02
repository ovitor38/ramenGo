import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
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
  required: true,
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
    status: 201,
    description: 'protein created successfully.',
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
    type: ProteinModelResponse,
    description: 'The found record'
  })
  async findAll(): Promise<ISuccessfullyResponse<ProteinEntity[]>> {
    return successResponseBody(await this.proteinsService.findAll())
  }

  @Get(':id')
  @ApiOperation({ summary: 'Returns all proteins records' })
  @ApiResponse({
    status: 200,
    type: ProteinModelResponse,
    description: 'The found record'
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
    description: 'Protein record updated successfully.',
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
    description: 'Protein record deleted successfully.',
    type: MessageResponseModel
  })
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.proteinsService.remove(+id))
  }
}
