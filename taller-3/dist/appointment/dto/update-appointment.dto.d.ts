import { CreateAppointmentDto } from "./create-appointment.dto";
import { AppointmentStatus } from "../enum/appointmentenum";
declare const UpdateAppointmentDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAppointmentDto>>;
export declare class UpdateAppointmentDto extends UpdateAppointmentDto_base {
    detail_type: string;
    status?: AppointmentStatus;
}
export {};
