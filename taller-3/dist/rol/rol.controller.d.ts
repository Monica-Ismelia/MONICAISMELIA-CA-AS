import { RolService } from './rol.service';
import { CreateRolDto } from './rolDto/rol.dto';
import { Rol } from './entities/rol_entities.entity';
export declare class RolController {
    private readonly Rolservice;
    constructor(Rolservice: RolService);
    create(CreateRolDto: CreateRolDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
