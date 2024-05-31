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

@Controller('proteins')
export class ProteinsController {
  constructor(private readonly proteinsService: ProteinsService) {}

  @Post()
  @UseGuards(ApiKeyGuard)
  async create(
    @Body() createProteinDto: CreateProteinDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.proteinsService.create(createProteinDto)
    )
  }

  @Get()
  @UseGuards(ApiKeyGuard)
  async findAll(): Promise<ISuccessfullyResponse<ProteinEntity[]>> {
    return successResponseBody(await this.proteinsService.findAll())
  }

  @Get(':id')
  @UseGuards(ApiKeyGuard)
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<ProteinEntity>> {
    return successResponseBody(await this.proteinsService.findOne(+id))
  }

  @Patch(':id')
  @UseGuards(ApiKeyGuard)
  async update(
    @Param('id') id: string,
    @Body() updateProteinDto: UpdateProteinDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.proteinsService.update(+id, updateProteinDto)
    )
  }

  @Delete(':id')
  @UseGuards(ApiKeyGuard)
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.proteinsService.remove(+id))
  }
}
