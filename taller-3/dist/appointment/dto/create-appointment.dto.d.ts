import { AppointmentStatus } from '../enum/appointmentenum';
export declare class CreateAppointmentDto {
    date: string;
    time: string;
    reason: string;
    value: number;
    Id_users: number;
    Id_pet: number;
    Id_product_service: number;
    detail_type: string;
    status: AppointmentStatus;
}
