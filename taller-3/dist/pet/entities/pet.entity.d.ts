import { Appointment } from '../../appointment/entities/appointment.entity';
import { ClientOwner } from '../../client-owner/entities/client-owner.entity';
import { MedicalHistory } from '../../medical-history/entities/medical-history.entity';
export declare class Pet {
    Id_pet: number;
    name: string;
    species: string;
    breed: string;
    sex: string;
    weight: number;
    observations: string;
    Id_client: number;
    client: ClientOwner;
    appointments: Appointment[];
    medicalHistory: MedicalHistory;
    createdAt: Date;
    updatedAt: Date;
}
