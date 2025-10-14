import{ IsDateString, IsString } from 'class-validator'; // Importa los decoradores de validación
export class CreateVisitDto { // Define el DTO para crear una nueva cita
  
    @IsDateString() // Valida que el valor sea una cadena de fecha en formato ISO 8601
    date: string;   // Fecha de la cita en formato ISO 8601
 
     @IsString()
    reason: string; // Motivo de la cita
}
