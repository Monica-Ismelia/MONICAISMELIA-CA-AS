import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol_entities.entity';
import { CreateRolDto } from './rolDto/rol.dto';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private rolRepository: Repository<Rol>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,  
    ){}

    async create(CreateRolDto: CreateRolDto): Promise<Rol>{
        const existingRol = await this.rolRepository.findOne({
            where:{rol_nombre: CreateRolDto.rol_nombre}
        });

        if(existingRol){
            throw new ConflictException('Este rol ya existe.');
        }

        const newRol = this.rolRepository.create(CreateRolDto);

        return this.rolRepository.save(newRol);
    }

    async findAll(): Promise<Rol[]>{
        return this.rolRepository.find();
    }

    

    async remove(id: number): Promise<{message: string}> {
        // 1. Ejecuta la eliminación y captura el resultado
        const userCount = await this.userRepository.count({
            where: {Id_rol: id},

        });

        if (userCount > 0){
            throw new ConflictException(
                `El rol con el ID ${id} no se puede eliminar devido a que está asignado a ${userCount} usuarios.`
            );
        }

        const result = await this.rolRepository .delete(id);
        
        // 2. Verifica si alguna fila fue afectada (es decir, si el rol existía)
        if (result.affected === 0) {
            // Si affected es 0, el rol no fue encontrado, lanza una excepción 404
            throw new NotFoundException(`Role con el ID ${id} no encontrado`);
        }
        return{
            message:  `Rol con el Id ${id} ha sido eliminado.`
        };
    }

}
