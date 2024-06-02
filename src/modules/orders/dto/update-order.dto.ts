import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
    @ApiPropertyOptional()
    @IsString()
    description: string
  
    @ApiPropertyOptional()
    @IsString()
    image: string
  
    @ApiPropertyOptional()
    @IsString()
    proteinId: string
  
    @ApiPropertyOptional()
    @IsString()
    brothId: string
}
