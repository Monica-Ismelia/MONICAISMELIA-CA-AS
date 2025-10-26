import { Repository } from 'typeorm';
import { Rol } from './entities/rol_entities.entity';
import { CreateRolDto } from './rolDto/rol.dto';
import { User } from 'src/user/entities/user.entity';
export declare class RolService {
    private rolRepository;
    private readonly userRepository;
    constructor(rolRepository: Repository<Rol>, userRepository: Repository<User>);
    create(CreateRolDto: CreateRolDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
