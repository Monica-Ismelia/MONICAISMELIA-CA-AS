import { PartialType } from "@nestjs/mapped-types";
import { CreateAppointmentDto } from "./create-appointment.dto";
import {
  IsEnum,
  isEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";
import { AppointmentStatus } from "../enum/appointmentenum";
import { Appointment } from "../entities/appointment.entity";

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
  @IsString()
  @IsNotEmpty()
  detail_type: string;

  @IsOptional()
  @IsEnum(AppointmentStatus, {
    message:
      "El estado debe ser un valor válido: PENDIENTE, CONFIRMADA, CANCELADA, REALIZADA, NO_ASISTIO",
  })
  status?: AppointmentStatus;
}
