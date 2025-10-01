import { IsInt, Length, Min, IsString } from "class-validator";



export class CreateJuegoDto {

    @IsInt()
    id: number;

    @IsString()
    @Length(3, 50)
    nombre: string;

    @IsString()
    genero: string;

    @IsInt()
    idPlataforma: number;

    @IsInt()
    @Min(0)
    precio: number;

    @IsString()
    fechaLanzamiento: string;

}