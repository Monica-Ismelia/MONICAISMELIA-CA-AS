import { ArrayNotEmpty, IsArray, IsInt, IsString, Length, Min} from "class-validator";


export class UsuarioDto {
    @IsString()
    @Length(3, 50)
    nombre: string;

    @IsInt()
    @Min(0)
    edad: number;

    @IsString()
    email: string;
}

export class DeleteManyDto {
    @IsArray()
    @ArrayNotEmpty()
    @IsInt({ each: true })
    ids: number[];
}
