import { Appointment } from "../../appointment/entities/appointment.entity";
import { Pet } from "../../pet/entities/pet.entity";
import { User } from "../../user/entities/user.entity";
export declare class MedicalHistory {
    Id_medicalhistory: number;
    hist_date: string;
    hist_time: string;
    hist_diagnosys: string;
    hist_treatment: string;
    users: User[];
    Id_appo: number;
    appointment: Appointment;
    Id_pet: number;
    pet: Pet;
}
