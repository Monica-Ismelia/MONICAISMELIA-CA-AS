import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { Specialty } from './entities/specialty.entity';
import { Repository } from 'typeorm';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
export declare class SpecialtyService {
    private specialtyRepository;
    constructor(specialtyRepository: Repository<Specialty>);
    create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>;
    findAll(): Promise<Specialty[]>;
    updateSpecialty(id: number, data: UpdateSpecialtyDto): Promise<Specialty>;
}
