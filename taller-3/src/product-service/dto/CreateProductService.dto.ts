import { IsEnum, IsNumber, IsString, MinLength } from "class-validator";
import { ProductoServiceType } from "../enum/productserviceType";

export class CreateProductServiceDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  price: number;

  @IsEnum(ProductoServiceType)
  type: ProductoServiceType;
}
