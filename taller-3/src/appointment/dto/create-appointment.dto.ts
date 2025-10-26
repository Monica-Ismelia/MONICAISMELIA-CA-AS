import { IsString, IsNumber, IsDate, IsNotEmpty, IsInt } from 'class-validator';
import { Column } from 'typeorm';
import { AppointmentStatus } from '../enum/appointmentenum';

export class CreateAppointmentDto {
  @IsString()
  date: string; // formato: "YYYY-MM-DD"

  @IsString()
  time: string; // formato: "HH:mm"

  @IsString()
  reason: string;

  @IsNumber()
  value: number;

  @IsInt()
  Id_users: number;

  @IsInt()
  Id_pet: number;

  @IsNumber()
  @IsNotEmpty ()
  Id_product_service: number; 


  @IsString()
  @IsNotEmpty()
  detail_type: string;

  @Column({
    type: 'enum',
    enum: AppointmentStatus,
    default: AppointmentStatus.PENDING,
    name: 'status'
  })
  status: AppointmentStatus;
  

}
