import { User } from '../../user/entities/user.entity';
export declare class AdministrativeStaff {
    id: number;
    userId: number;
    user: User;
    identification: string;
    phone: string;
    startDate: string;
    createdAt: Date;
    updatedAt: Date;
}
