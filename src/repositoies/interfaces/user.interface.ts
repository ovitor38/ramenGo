import { CreateUserDto } from 'src/modules/users/dto/create-user.dto'
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto'
import { UserModel } from 'src/modules/users/models/user.model'

export interface IUserRepository {
  create(createUserDto: CreateUserDto): Promise<void>
  get(id: string): Promise<UserModel>
  getByEmail(email: string): Promise<UserModel>
  getAll(): Promise<UserModel[]>
  update(id: string, updateUserDto: UpdateUserDto): Promise<void>
  delete(id: string): Promise<void>
}
