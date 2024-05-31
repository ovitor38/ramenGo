import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common'

import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { HasherAdapter } from 'src/adapters/hasher/hasher.adapter'
import { UserPrismaRepository } from './repository/user.repository'
import { IUserRepository } from 'src/repositoies/interfaces/user.interface'
import { PrismaCodeError } from 'src/errors/prisma.errors'
import { USER_ALREADRY_EXIST } from 'src/errors/message.errors'
import 'src/helpers/response/http-response'
import {
  USER_CREATED_SUCESSFULLY,
  USER_DELETED_SUCESSFULLY,
  USER_UPDATED_SUCESSFULLY
} from 'src/helpers/response/response-messages/messages'
import { UserModel } from './models/user.model'

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserPrismaRepository)
    private userRepository: IUserRepository,
    private hasherAdapter: HasherAdapter
  ) {}

  async create(createUserDto: CreateUserDto): Promise<string> {
    try {
      const hashedPassword = await this.hasherAdapter.hash(
        createUserDto.password
      )

      const user = { ...createUserDto, password: hashedPassword }

      await this.userRepository.create(user)
      return USER_CREATED_SUCESSFULLY
    } catch (error) {
      if (error.code === PrismaCodeError.UNIQUE_CONSTRAINT_FAILED) {
        throw new BadRequestException({ message: USER_ALREADRY_EXIST })
      }

      throw new InternalServerErrorException(error.message)
    }
  }

  async getOne(id: string): Promise<UserModel> {
    try {
      return await this.userRepository.get(id)
    } catch (error) {
      if (error.code === PrismaCodeError.USER_NOT_FOUND) {
        throw new NotFoundException(error.error)
      }

      throw new InternalServerErrorException(error.error)
    }
  }

  async getOneByEmail(email: string): Promise<UserModel> {
    try {
      return await this.userRepository.getByEmail(email)
    } catch (error) {
      if (error.code === PrismaCodeError.USER_NOT_FOUND) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    try {
      await this.userRepository.update(id, updateUserDto)
      return USER_UPDATED_SUCESSFULLY
    } catch (error) {
      if (error.code === PrismaCodeError.USER_NOT_FOUND) {
        throw new NotFoundException(error.error)
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async delete(id: string) {
    try {
      await this.userRepository.delete(id)
      return USER_DELETED_SUCESSFULLY
    } catch (error) {
      if (error.code === PrismaCodeError.USER_NOT_FOUND) {
        throw new NotFoundException(error.error)
      }
      throw new InternalServerErrorException(error.message)
    }
  }
}
