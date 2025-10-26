import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentController {
    private readonly appointmentService;
    constructor(appointmentService: AppointmentService);
    create(createDto: CreateAppointmentDto): Promise<import("./entities/appointment.entity").Appointment>;
    findAll(): Promise<import("./entities/appointment.entity").Appointment[]>;
    findOne(id: number): Promise<import("./entities/appointment.entity").Appointment>;
    update(id: number, updateDto: UpdateAppointmentDto): Promise<import("./entities/appointment.entity").Appointment>;
    findMedico(Id_users: string): Promise<import("./entities/appointment.entity").Appointment[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
