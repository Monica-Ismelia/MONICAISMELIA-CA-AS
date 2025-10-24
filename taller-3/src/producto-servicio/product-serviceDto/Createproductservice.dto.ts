import { IsEnum, IsNumber, IsString, MinLength } from "class-validator";
import { ProductoServiceType } from "../enum/productserviceType";

export class CreateProductServiceDto{
    @IsString()
    @MinLength(3)
    prod_name: string;

    @IsNumber()
    prod_price: number;

    @IsEnum(ProductoServiceType)
    prod_type: ProductoServiceType;
}