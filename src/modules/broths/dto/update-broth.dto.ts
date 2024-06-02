import { PartialType } from '@nestjs/mapped-types'
import { CreateBrothDto } from './create-broth.dto'
import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class UpdateBrothDto extends PartialType(CreateBrothDto) {
  @ApiPropertyOptional()
  @IsString()
  imageInactive: string

  @ApiPropertyOptional()
  @IsString()
  imageActive: string

  @ApiPropertyOptional()
  @IsString()
  name: string

  @ApiPropertyOptional()
  @IsString()
  description: string

  @ApiPropertyOptional()
  @IsNumber()
  price: number
}
