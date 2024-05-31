import { IsNotEmpty, IsString } from 'class-validator'

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  image: string

  @IsNotEmpty()
  @IsString()
  proteinId: string

  @IsNotEmpty()
  @IsString()
  brothId: string
}
