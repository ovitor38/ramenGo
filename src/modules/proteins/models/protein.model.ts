import { ApiProperty } from '@nestjs/swagger'

export class ProteinModel {
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
  price: number
}
