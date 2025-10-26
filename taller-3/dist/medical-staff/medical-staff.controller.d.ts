import { MedicalStaffService } from './medical-staff.service';
import { createMedicoDto } from './medical_staffDTO/medicalStaff.dto';
import { MedicalStaff } from './entities/medical-staff.entity';
import { updateMedicoDto } from './medical_staffDTO/updatemedical.dto';
export declare class MedicalStaffController {
    private readonly medicoService;
    constructor(medicoService: MedicalStaffService);
    create(createMedicoDto: createMedicoDto): Promise<MedicalStaff>;
    finAll(): Promise<MedicalStaff[]>;
    update(id: string, updateMedicoDto: updateMedicoDto): Promise<MedicalStaff>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
