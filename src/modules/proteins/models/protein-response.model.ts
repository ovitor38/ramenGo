import { ApiProperty } from '@nestjs/swagger'
import { ProteinModel } from './protein.model'

export class ProteinModelResponse {
  @ApiProperty({ default: 200 })
  statusCode: number

  @ApiProperty({ description: 'The user data', type: ProteinModel })
  result: ProteinModel
}
