import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException
} from '@nestjs/common'
import { CreateProteinDto } from './dto/create-protein.dto'
import { UpdateProteinDto } from './dto/update-protein.dto'
import { IProteinRepository } from 'src/repositoies/interfaces/protein.interface'
import {
  entityType,
  genericSuccessfulyMessage,
  methodType
} from 'src/helpers/response/response-messages/messages'
import { ProteinEntity } from './entities/protein.entity'
import { PrismaCodeError } from 'src/errors/prisma.errors'

@Injectable()
export class ProteinsService {
  constructor(
    @Inject()
    private proteinRepository: IProteinRepository
  ) {}
  async create(createProteinDto: CreateProteinDto): Promise<string> {
    try {
      await this.proteinRepository.create(createProteinDto)
      return genericSuccessfulyMessage(entityType.PROTEIN, methodType.CREATED)
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findAll(): Promise<ProteinEntity[]> {
    try {
      return await this.proteinRepository.getAll()
    } catch (error) {
      throw new InternalServerErrorException(error.message)
    }
  }

  async findOne(id: number): Promise<ProteinEntity> {
    try {
      return await this.proteinRepository.get(id)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(error.message)
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async update(
    id: number,
    updateProteinDto: UpdateProteinDto
  ): Promise<string> {
    try {
      await this.proteinRepository.update(id, updateProteinDto)
      return genericSuccessfulyMessage(entityType.PROTEIN, methodType.UPDATED)
    } catch (error) {
      if (error.code === PrismaCodeError.NOT_FOUND) {
        throw new NotFoundException(
          error.message.slice(error.message.lastIndexOf('An')).trim()
        )
      }
      throw new InternalServerErrorException(error.message)
    }
  }

  async remove(id: number): Promise<string> {
    try {
      await this.proteinRepository.delete(id)
      return genericSuccessfulyMessage(entityType.PROTEIN, methodType.DELETED)
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
