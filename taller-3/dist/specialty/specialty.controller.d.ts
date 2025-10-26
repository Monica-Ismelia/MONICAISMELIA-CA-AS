import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { Specialty } from './entities/specialty.entity';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtyController {
    private readonly specialtyService;
    constructor(specialtyService: SpecialtyService);
    create(CreateSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    findAll(): Promise<Specialty[]>;
    update(id: number, UpdateSpecialtyDto: UpdateSpecialtyDto): Promise<Specialty>;
}
