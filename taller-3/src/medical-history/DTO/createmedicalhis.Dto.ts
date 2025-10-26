import { IsArray, IsInt, isInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMedicalHistoryDto{
    
    @IsString()
    @IsNotEmpty()
    hist_date: string;
    
    
    @IsString()
    @IsNotEmpty()
    hist_time: string;

    @IsString()
    @IsNotEmpty()
    hist_diagnosys: string;

    @IsString()
    @IsNotEmpty()
    hist_treatment: string; // Columna hist_treatment

    @IsInt()
    @IsNotEmpty()
    Id_appo: number; 
    
    @IsInt()
    @IsNotEmpty()
    Id_pet: number; // FK a Pet

  // Para manejar la relación ManyToMany con User (usuario_historial)
    @IsArray()
    @IsInt({ each: true })
    @IsNotEmpty()
    Id_users: number[];
}