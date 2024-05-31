import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { AuthGuard } from '../auth/auth.guard'
import {
  ISuccessfullyResponse,
  successResponseBody,
  successResponseMessage
} from 'src/helpers/response/http-response'
import { UserModel } from './models/user.model'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.usersService.create(createUserDto))
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async get(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<UserModel>> {
    return successResponseBody(await this.usersService.getOne(id))
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<ISuccessfullyResponse> {
    return successResponseMessage(
      await this.usersService.update(id, updateUserDto)
    )
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.usersService.delete(id))
  }
}
