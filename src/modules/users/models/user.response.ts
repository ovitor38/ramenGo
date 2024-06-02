import { ApiProperty } from '@nestjs/swagger'
import { UserModel } from './user.model'

export class UserModelResponse {
  @ApiProperty({ default: 200 })
  statusCode: number

  @ApiProperty({ description: 'The user data', type: UserModel })
  result: UserModel
}
