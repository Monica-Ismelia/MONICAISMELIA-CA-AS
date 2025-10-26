import { Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<{
        Id_users: number;
        firstName: string;
        lastName: string;
        email: string;
        ID_rol: number;
        createdAt: Date;
        updatedAt: Date;
        administrativeStaff: import("../../administrative-staff/entities/administrative-staff.entity").AdministrativeStaff;
        medicalstaff: import("../../medical-staff/entities/medical-staff.entity").MedicalStaff;
        medicalHistory: import("../../medical-history/entities/medical-history.entity").MedicalHistory[];
        appointments: import("../../appointment/entities/appointment.entity").Appointment[];
    }>;
}
export {};
