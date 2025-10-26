import { Repository } from 'typeorm';
import { DetaBill } from './entities/detabill.entity';
import { CreateDetaBillDto } from './dto/create-detabill.dto';
import { UpdateDetaBillDto } from './dto/update-detabill.dto';
export declare class DetaBillService {
    private readonly detaBillRepository;
    constructor(detaBillRepository: Repository<DetaBill>);
    create(dto: CreateDetaBillDto): Promise<DetaBill>;
    findAll(): Promise<DetaBill[]>;
    findOne(id: number): Promise<DetaBill>;
    update(id: number, dto: UpdateDetaBillDto): Promise<DetaBill>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
