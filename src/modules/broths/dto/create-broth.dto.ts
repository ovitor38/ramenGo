import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateBrothDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  imageInactive: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  imageActive: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  price: number
}
