import { ApiProperty } from '@nestjs/swagger'
import { ProteinEntity } from '../entities/protein.entity'

export class ProteinModelResponse {
  @ApiProperty({ default: 200 })
  statusCode: number

  @ApiProperty({ description: 'The user data', type: ProteinEntity })
  result: ProteinEntity
}