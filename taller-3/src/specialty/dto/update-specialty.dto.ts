import { IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateSpecialtyDto{
    @IsOptional()
    @IsString({message: 'El nombre debe ser un texto'})
    @MaxLength(100)
    specialty_name?: string;
}