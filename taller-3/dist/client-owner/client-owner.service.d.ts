import { Repository } from 'typeorm';
import { ClientOwner } from './entities/client-owner.entity';
import { CreateClientOwnerDto } from './dto/create-client-owner.dto';
import { UpdateClientOwnerDto } from './dto/update-client-owner.dto';
export declare class ClientOwnerService {
    private readonly clientOwnerRepository;
    constructor(clientOwnerRepository: Repository<ClientOwner>);
    create(createClientOwnerDto: CreateClientOwnerDto): Promise<ClientOwner>;
    findAll(): Promise<ClientOwner[]>;
    findOne(id: number): Promise<ClientOwner>;
    update(id: number, updateClientOwnerDto: UpdateClientOwnerDto): Promise<ClientOwner>;
    remove(id: number): Promise<void>;
}
