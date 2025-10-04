import { IsString, MinLength } from 'class-validator';

export class CreatePlataformaDto {
  @IsString()
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
  nombre: string;

  @IsString()
  @MinLength(3, { message: 'El fabricante debe tener al menos 3 caracteres.' })
  fabricante: string;
}
