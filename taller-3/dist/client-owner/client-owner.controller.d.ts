import { ClientOwnerService } from './client-owner.service';
import { CreateClientOwnerDto } from './dto/create-client-owner.dto';
import { UpdateClientOwnerDto } from './dto/update-client-owner.dto';
export declare class ClientOwnerController {
    private readonly clientOwnerService;
    constructor(clientOwnerService: ClientOwnerService);
    create(createClientOwnerDto: CreateClientOwnerDto): Promise<import("./entities/client-owner.entity").ClientOwner>;
    findAll(): Promise<import("./entities/client-owner.entity").ClientOwner[]>;
    findOne(id: number): Promise<import("./entities/client-owner.entity").ClientOwner>;
    update(id: number, updateClientOwnerDto: UpdateClientOwnerDto): Promise<import("./entities/client-owner.entity").ClientOwner>;
    remove(id: number): Promise<void>;
}
