import { PartialType } from '@nestjs/mapped-types'
import { CreateProteinDto } from './create-protein.dto'
import { IsNumber, IsString } from 'class-validator'
import { ApiPropertyOptional } from '@nestjs/swagger'

export class UpdateProteinDto extends PartialType(CreateProteinDto) {
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
