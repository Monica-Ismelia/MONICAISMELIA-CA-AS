import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rol } from './entities/rol_entities.entity';
import { CreateRolDto } from './rolDto/rol.dto';

@Injectable()
export class RolService {
    constructor(
        @InjectRepository(Rol)
        private rolRepository: Repository<Rol>
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

}
