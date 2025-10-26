import { Bill } from '../../bill/entity/bill.entity';
import { Pet } from '../../pet/entities/pet.entity';
import { Rol } from '../../rol/entities/rol_entities.entity';
export declare class ClientOwner {
    Id_client: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    rol: Rol;
    pets: Pet[];
    bills: Bill[];
    createdAt: Date;
    updatedAt: Date;
}
