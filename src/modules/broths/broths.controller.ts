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
import { AuthGuard } from '../auth/auth.guard'
import {
  ISuccessfullyResponse,
  successResponseBody,
  successResponseMessage
} from 'src/helpers/response/http-response'
import { BrothEntity } from './entities/broth.entity'

@Controller('broths')
export class BrothsController {
  constructor(private readonly brothsService: BrothsService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(
    @Body() createBrothDto: CreateBrothDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.brothsService.create(createBrothDto)
    )
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<ISuccessfullyResponse<BrothEntity[]>> {
    return successResponseBody(await this.brothsService.findAll())
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<BrothEntity>> {
    return successResponseBody(await this.brothsService.findOne(+id))
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateBrothDto: UpdateBrothDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.brothsService.update(+id, updateBrothDto)
    )
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.brothsService.remove(+id))
  }
}
