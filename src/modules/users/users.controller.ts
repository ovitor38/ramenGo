import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Patch
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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserModelResponse } from './models/user.response'
import { UserMessageResponse } from './models/user-message.response'

@Controller('users')
@ApiTags('users')
@ApiResponse({
  status: 500,
  description: 'Internal Server Error',
  type: UserMessageResponse
})
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully.',
    type: UserMessageResponse
  })
  async create(
    @Body() createUserDto: CreateUserDto
  ): Promise<ISuccessfullyResponse<string>> {
    return successResponseMessage(await this.usersService.create(createUserDto))
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Returns the user with the referenced id' })
  @ApiResponse({
    status: 200,
    type: UserModelResponse,
    description: 'The found record'
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized User',
    type: UserMessageResponse
  })
  async get(
    @Param('id') id: string
  ): Promise<ISuccessfullyResponse<UserModel>> {
    return successResponseBody(await this.usersService.getOne(id))
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update the user with the referenced id' })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully.',
    type: UserMessageResponse
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized User',
    type: UserMessageResponse
  })
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
  @ApiResponse({
    status: 200,
    description: 'User updated successfully.',
    type: UserMessageResponse
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized User',
    type: UserMessageResponse
  })
  @ApiOperation({ summary: 'Delete the user with the referenced id' })
  async remove(@Param('id') id: string): Promise<ISuccessfullyResponse> {
    return successResponseMessage(await this.usersService.delete(id))
  }
}
