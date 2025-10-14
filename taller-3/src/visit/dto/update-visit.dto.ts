import { PartialType } from '@nestjs/mapped-types'; // importa la utilidad PartialType de NestJS
import { CreateVisitDto } from './create-visit.dto';// Importa el DTO para crear una nueva cita
import { IsOptional, IsString } from 'class-validator';// Importa los decoradores de validación
 // Define el DTO para actualizar una cita existente, extendiendo CreateVisitDto
export class UpdateVisitDto extends PartialType(CreateVisitDto) {
  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  petId?: string;
}
