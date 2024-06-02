import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class ISuccessfullyResponse<T = string> {
  @ApiProperty()
  statusCode: number

  @ApiPropertyOptional({ example: 'User created successfully' })
  message?: string

  @ApiPropertyOptional()
  result?: T
}

export const successResponseMessage = (
  message: string
): ISuccessfullyResponse => {
  return {
    statusCode: 201,
    message
  }
}

export const successResponseBody = <T>(body: T): ISuccessfullyResponse<T> => {
  return {
    statusCode: 200,
    result: body
  }
}
