import { Repository } from 'typeorm';
import { AdministrativeStaff } from './entities/administrative-staff.entity';
import { CreateAdministrativeStaffDto } from './dto/create-administrative-staff.dto';
import { UpdateAdministrativeStaffDto } from './dto/update-administrative-staff.dto';
export declare class AdministrativeStaffService {
    private readonly adminStaffRepository;
    constructor(adminStaffRepository: Repository<AdministrativeStaff>);
    create(createDto: CreateAdministrativeStaffDto): Promise<AdministrativeStaff>;
    findAll(): Promise<AdministrativeStaff[]>;
    findOne(id: number): Promise<AdministrativeStaff>;
    update(id: number, updateDto: UpdateAdministrativeStaffDto): Promise<AdministrativeStaff>;
    remove(id: number): Promise<void>;
}
