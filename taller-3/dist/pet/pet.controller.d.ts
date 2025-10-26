import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
export declare class PetController {
    private readonly petService;
    constructor(petService: PetService);
    create(createPetDto: CreatePetDto): Promise<import("./entities/pet.entity").Pet>;
    findAll(): Promise<import("./entities/pet.entity").Pet[]>;
    findOne(id: number): Promise<import("./entities/pet.entity").Pet>;
    update(id: number, updatePetDto: UpdatePetDto): Promise<import("./entities/pet.entity").Pet>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
