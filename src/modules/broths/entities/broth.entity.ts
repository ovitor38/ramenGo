import { ApiProperty } from '@nestjs/swagger'
import { Decimal } from '@prisma/client/runtime/library'

export class BrothEntity {
  @ApiProperty()
  id: string

  @ApiProperty()
  imageInactive: string

  @ApiProperty()
  imageActive: string

  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  price: Decimal
}
