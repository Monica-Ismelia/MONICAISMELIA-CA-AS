import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    private readonly logger;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: any;
            email: any;
            firstName: any;
            lastName: any;
            role: any;
        };
    }>;
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
    refreshToken(user: any): Promise<{
        access_token: string;
    }>;
}
