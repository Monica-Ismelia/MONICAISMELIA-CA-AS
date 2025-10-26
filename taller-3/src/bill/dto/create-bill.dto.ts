import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CreateBillDto {
  @IsDateString()
  fac_date: string;

  @Type(() => Number)
  @IsNumber()
  fac_total: number;

  @Type(() => Number)
  @IsNumber()
  Id_client: number;
}
