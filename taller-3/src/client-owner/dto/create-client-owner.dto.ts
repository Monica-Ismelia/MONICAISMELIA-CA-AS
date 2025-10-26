import { IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateClientOwnerDto {

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
