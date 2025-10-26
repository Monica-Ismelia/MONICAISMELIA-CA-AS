import { User } from "../../user/entities/user.entity";
import { ClientOwner } from "../../client-owner/entities/client-owner.entity";
export declare class Rol {
    Id_rol: number;
    rol_nombre: string;
    clientOwners: ClientOwner[];
    users: User[];
}
