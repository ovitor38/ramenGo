import { ApiProperty } from '@nestjs/swagger'

export class OrderEntity {
  @ApiProperty()
  id: string

  @ApiProperty()
  description: string

  @ApiProperty()
  image: string

  @ApiProperty()
  proteinId: string

  @ApiProperty()
  brothId: string

  @ApiProperty()
  userId: string
}
