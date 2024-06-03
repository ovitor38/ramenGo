import { ApiProperty } from '@nestjs/swagger'

export class ForbiddenExceptionModel {
  @ApiProperty({ example: 'x-api-key header missing' })
  error: string
}
