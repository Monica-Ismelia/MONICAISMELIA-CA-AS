import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './DTO/createmedicalhis.Dto';
import { UpdateMedicalHistoryDto } from './DTO/Updatemedicalhis.Dto';
export declare class MedicalHistoryController {
    private readonly historyService;
    constructor(historyService: MedicalHistoryService);
    create(createDto: CreateMedicalHistoryDto): Promise<import("./entities/medical-history.entity").MedicalHistory>;
    findAll(): Promise<import("./entities/medical-history.entity").MedicalHistory[]>;
    findOne(id: number): Promise<import("./entities/medical-history.entity").MedicalHistory>;
    update(id: number, updateDto: UpdateMedicalHistoryDto): Promise<import("./entities/medical-history.entity").MedicalHistory>;
    remove(id: number): Promise<void>;
}
