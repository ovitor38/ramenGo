import { ApiProperty } from '@nestjs/swagger'

export class UserMessageResponse {
  @ApiProperty()
  statusCode: number

  @ApiProperty({ description: 'Successfull message', type: String })
  message: string
}
