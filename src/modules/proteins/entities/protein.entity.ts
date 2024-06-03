import { ApiProperty } from '@nestjs/swagger'
import { Decimal } from '@prisma/client/runtime/library'

export class ProteinEntity {
  @ApiProperty()
  id: number

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
