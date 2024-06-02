import { ApiProperty } from '@nestjs/swagger'

export class MessageResponseModel {
  @ApiProperty()
  statusCode: number

  @ApiProperty({ description: 'Successfull message', type: String })
  message: string
}
