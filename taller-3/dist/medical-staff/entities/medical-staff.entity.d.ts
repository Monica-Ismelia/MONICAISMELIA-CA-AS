import { Specialty } from "../../specialty/entities/specialty.entity";
import { User } from "../../user/entities/user.entity";
export declare class MedicalStaff {
    Id_users: number;
    user: User;
    identification: string;
    phone: string;
    Id_specialty: number;
    users: User;
    specialty: Specialty;
}
