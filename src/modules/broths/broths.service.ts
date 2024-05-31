import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common'
import { CreateBrothDto } from './dto/create-broth.dto'
import { UpdateBrothDto } from './dto/update-broth.dto'
import { BrothRepository } from './repository/broth.repository'
import { IBrothRepository } from 'src/repositoies/interfaces/broth.interface'
import {
  entityType,
  genericSuccessfulyMessage,
  methodType
} from 'src/helpers/response/response-messages/messages'
import { BrothEntity } from './entities/broth.entity'
import { PrismaCodeError } from 'src/errors/prisma.errors'

@Injectable()
export class BrothsService {
  constructor(
    @Inject(BrothRepository)
    private brothRepository: IBrothRepository
  ) {}

  async create(createBrothDto: CreateBrothDto): Promise<string> {
    try {
      await this.brothRepository.create(createBrothDto)

      return genericSuccessfulyMessage(entityType.BROTH, methodType.CREATED)
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findAll(): Promise<BrothEntity[]> {
    try {
      return await this.brothRepository.getAll()
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findOne(id: string): Promise<BrothEntity> {
    try {
      return await this.brothRepository.get(+id)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async update(id: string, updateBrothDto: UpdateBrothDto): Promise<string> {
    try {
      await this.brothRepository.update(+id, updateBrothDto)

      return genericSuccessfulyMessage(entityType.BROTH, methodType.UPDATED)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(
          error.message.slice(error.message.lastIndexOf('An')).trim()
        )
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async remove(id: string): Promise<string> {
    try {
      await this.brothRepository.delete(+id)
      return genericSuccessfulyMessage(entityType.BROTH, methodType.DELETED)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(
          error.message.slice(error.message.lastIndexOf('An')).trim()
        )
      }
      throw new InternalServerErrorException(error.message)
    }
  }
}
