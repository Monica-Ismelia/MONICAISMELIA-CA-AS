import { Type } from "class-transformer";
import { IsInt, IsNumber, IsOptional, IsPhoneNumber, IsString, Length } from "class-validator";

export class updateMedicoDto{
    @IsOptional()
    @IsString()
    @IsPhoneNumber ('CO')
    @Length(1, 15)
    phone?: string;


    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    Id_speciality?: number;

}