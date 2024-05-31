import { CreateUserDto } from 'src/modules/users/dto/create-user.dto'
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto'
import { UserModel } from 'src/modules/users/models/user.model'
import { ICrudRepository } from './crud.interface'

export interface IUserRepository extends ICrudRepository<UserModel, CreateUserDto, UpdateUserDto> {
  getByEmail(email: string): Promise<UserModel>
}
