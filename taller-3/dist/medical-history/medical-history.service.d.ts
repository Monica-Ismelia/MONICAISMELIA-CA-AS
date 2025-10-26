import { Repository } from 'typeorm';
import { MedicalHistory } from './entities/medical-history.entity';
import { User } from 'src/user/entities/user.entity';
import { CreateMedicalHistoryDto } from './DTO/createmedicalhis.Dto';
import { UpdateMedicalHistoryDto } from './DTO/Updatemedicalhis.Dto';
export declare class MedicalHistoryService {
    private readonly historyRepository;
    private readonly userRepository;
    constructor(historyRepository: Repository<MedicalHistory>, userRepository: Repository<User>);
    create(createDto: CreateMedicalHistoryDto): Promise<MedicalHistory>;
    findAll(): Promise<MedicalHistory[]>;
    findOne(id: number): Promise<MedicalHistory>;
    update(id: number, updateDto: UpdateMedicalHistoryDto): Promise<MedicalHistory>;
    remove(id: number): Promise<void>;
}
