
import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Min, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @Length(5,50)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  price: number;
}
