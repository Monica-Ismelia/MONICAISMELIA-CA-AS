import { IsNumber, IsOptional, IsPhoneNumber, Length } from "class-validator";

export class updateMedicoDto{
    @IsOptional()
    @IsPhoneNumber ('CO')
    @Length(1, 15)
    phone?: string;


    @IsOptional()
    @IsNumber()
    Id_speciality?: number;

}