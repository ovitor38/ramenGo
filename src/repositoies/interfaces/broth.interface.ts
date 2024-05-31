import { BrothEntity } from 'src/modules/broths/entities/broth.entity'
import { IRepository } from './crud.interface'
import { CreateBrothDto } from 'src/modules/broths/dto/create-broth.dto'
import { UpdateBrothDto } from 'src/modules/broths/dto/update-broth.dto'

export interface IBrothRepository extends IRepository<BrothEntity, CreateBrothDto, UpdateBrothDto> {}
