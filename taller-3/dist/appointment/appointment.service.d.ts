import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { Pet } from 'src/pet/entities/pet.entity';
export declare class AppointmentService {
    private readonly appointmentRepository;
    private readonly petRepository;
    constructor(appointmentRepository: Repository<Appointment>, petRepository: Repository<Pet>);
    create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment>;
    findAll(): Promise<Appointment[]>;
    findOne(id: number): Promise<Appointment>;
    update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment>;
    remove(id: number): Promise<{
        message: string;
    }>;
    findMedico(Id_users?: string): Promise<Appointment[]>;
}
