import { IsDateString, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length } from "class-validator";

export class createMedicoDto{
    @IsNotEmpty()
    @IsString()
    @Length(1, 15)
    identification: string;

    @IsNotEmpty()
    @IsString()
    @IsPhoneNumber('CO', {message: 'El número de celular debe ser valido'})
    @Length(1, 15)
    phone: string;

    @IsNotEmpty({message: 'El ID de la especialidad es obligatorio.'})
    @IsNumber({}, {message: 'El ID de la especialidad debe ser un número.'})
    Id_specialty: number;

    @IsNotEmpty()
    @IsNumber({},{ message: 'El ID del uusario debe ser un número'})
    Id_users: number;

}