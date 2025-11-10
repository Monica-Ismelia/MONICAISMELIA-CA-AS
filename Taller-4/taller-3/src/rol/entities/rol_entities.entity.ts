import { User } from "../../user/entities/user.entity";
import { ClientOwner } from "../../client-owner/entities/client-owner.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity ('rol')
export class Rol{
    @PrimaryGeneratedColumn()
    Id_rol: number;

    @Column()
    rol_nombre: string;

    // Esto permite obtener todos los clientes asociados a este rol.
    @OneToMany(() => ClientOwner, (clientOwner) => clientOwner.rol)
    clientOwners: ClientOwner[];

    @OneToMany(()=> User, (user)=>user.rol)
    users: User[];
}