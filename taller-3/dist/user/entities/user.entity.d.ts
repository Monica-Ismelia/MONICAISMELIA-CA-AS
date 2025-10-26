import { AdministrativeStaff } from '../../administrative-staff/entities/administrative-staff.entity';
import { MedicalHistory } from '../../medical-history/entities/medical-history.entity';
import { Appointment } from '../../appointment/entities/appointment.entity';
import { MedicalStaff } from '../../medical-staff/entities/medical-staff.entity';
import { Rol } from '../../rol/entities/rol_entities.entity';
export declare class User {
    Id_users: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    Id_rol: number;
    createdAt: Date;
    updatedAt: Date;
    administrativeStaff: AdministrativeStaff;
    medicalstaff: MedicalStaff;
    medicalHistory: MedicalHistory[];
    appointments: Appointment[];
    rol: Rol;
}
