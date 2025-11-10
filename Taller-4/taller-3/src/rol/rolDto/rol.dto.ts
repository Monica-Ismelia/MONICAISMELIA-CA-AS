import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateRolDto{
    @IsNotEmpty({message: 'El nombre del rol no debe estar vacio'})
    @IsString()
    @MaxLength(50)
    rol_nombre: string;
}