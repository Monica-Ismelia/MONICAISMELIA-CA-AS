import { AdministrativeStaffService } from './administrative-staff.service';
import { CreateAdministrativeStaffDto } from './dto/create-administrative-staff.dto';
import { UpdateAdministrativeStaffDto } from './dto/update-administrative-staff.dto';
export declare class AdministrativeStaffController {
    private readonly adminStaffService;
    constructor(adminStaffService: AdministrativeStaffService);
    create(createDto: CreateAdministrativeStaffDto): Promise<import("./entities/administrative-staff.entity").AdministrativeStaff>;
    findAll(): Promise<import("./entities/administrative-staff.entity").AdministrativeStaff[]>;
    findOne(id: number): Promise<import("./entities/administrative-staff.entity").AdministrativeStaff>;
    update(id: number, updateDto: UpdateAdministrativeStaffDto): Promise<import("./entities/administrative-staff.entity").AdministrativeStaff>;
    remove(id: number): Promise<void>;
}
