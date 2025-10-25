import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            Id_users: number;
            firstName: string;
            lastName: string;
            email: string;
            ID_rol: number;
            createdAt: Date;
            updatedAt: Date;
            administrativeStaff: import("../administrative-staff/entities/administrative-staff.entity").AdministrativeStaff;
            medicalstaff: import("../medical-staff/entities/medical-staff.entity").MedicalStaff;
            medicalHistory: import("../medical-history/entities/medical-history.entity").MedicalHistory[];
            appointments: import("../appointment/entities/appointment.entity").Appointment[];
        };
    }>;
    login(loginDto: LoginDto, user: any): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            firstName: any;
            lastName: any;
            role: any;
        };
    }>;
    getProfile(user: any): {
        message: string;
        user: any;
    };
    refreshToken(user: any): Promise<{
        access_token: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
}
