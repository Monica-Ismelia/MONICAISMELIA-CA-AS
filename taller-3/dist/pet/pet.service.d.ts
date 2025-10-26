import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class PetService {
    private readonly petRepository;
    private readonly appointmentRepository;
    constructor(petRepository: Repository<Pet>, appointmentRepository: Repository<Appointment>);
    create(createPetDto: CreatePetDto): Promise<Pet>;
    findAll(): Promise<Pet[]>;
    findOne(id: number): Promise<Pet>;
    update(id: number, updatePetDto: UpdatePetDto): Promise<Pet>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
