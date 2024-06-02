import { ApiProperty } from '@nestjs/swagger'

export class UserModel {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  email: string

  @ApiProperty({ required: false })
  password?: string
}
