import { IsNumber } from 'class-validator';

export class CreateDetaBillDto {
  @IsNumber()
  Id_bill: number;

  @IsNumber()
  Id_product_service: number;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}
