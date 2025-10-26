import { Repository } from 'typeorm';
import { MedicalStaff } from './entities/medical-staff.entity';
import { createMedicoDto } from './medical_staffDTO/medicalStaff.dto';
import { updateMedicoDto } from './medical_staffDTO/updatemedical.dto';
export declare class MedicalStaffService {
    private medicalRepository;
    constructor(medicalRepository: Repository<MedicalStaff>);
    create(createMedicoDto: createMedicoDto): Promise<MedicalStaff>;
    findAll(): Promise<MedicalStaff[]>;
    update(id: string, updateMedicoDto: updateMedicoDto): Promise<MedicalStaff>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
