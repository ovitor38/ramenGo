import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateBrothDto {
  @IsNotEmpty()
  @IsString()
  imageInactive: string

  @IsNotEmpty()
  @IsString()
  imageActive: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsNumber()
  price: number
}
