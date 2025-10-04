// DTO Objeto que  define como  se ve una actualización parcial
// se usa en el cuerpo de las  petciones PUT
import { IsString, IsOptional, IsDateString } from 'class-validator';

// DTO para actualización parcial del Desarrollador
export class UpdateDesarrolladorDto {
  @IsString()
  @IsOptional()
  nombre?: string; 

  @IsString()
  @IsOptional()
  pais?: string;

  @IsDateString()
  @IsOptional()
  fundacion?: string; // formato: "YYYY-MM-DD"
}
