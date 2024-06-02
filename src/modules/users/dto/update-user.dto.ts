import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, Length } from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional()
  @IsNotEmpty()
  @Length(3, 200)
  name: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiPropertyOptional()
  @IsNotEmpty()
  @Length(2)
  password: string
}
