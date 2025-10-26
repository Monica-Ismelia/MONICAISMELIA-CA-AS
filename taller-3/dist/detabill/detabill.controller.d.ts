import { DetaBillService } from './detabill.service';
import { CreateDetaBillDto } from './dto/create-detabill.dto';
import { UpdateDetaBillDto } from './dto/update-detabill.dto';
export declare class DetaBillController {
    private readonly detaBillService;
    constructor(detaBillService: DetaBillService);
    create(dto: CreateDetaBillDto): Promise<import("./entities/detabill.entity").DetaBill>;
    findAll(): Promise<import("./entities/detabill.entity").DetaBill[]>;
    findOne(id: number): Promise<import("./entities/detabill.entity").DetaBill>;
    update(id: number, dto: UpdateDetaBillDto): Promise<import("./entities/detabill.entity").DetaBill>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
