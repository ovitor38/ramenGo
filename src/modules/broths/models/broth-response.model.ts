import { ApiProperty } from '@nestjs/swagger'
import { BrothModel } from './broth.model'

export class BrothModelResponse {
  @ApiProperty({ default: 200 })
  statusCode: number

  @ApiProperty({ description: 'The broth data', type: BrothModel })
  result: BrothModel
}
