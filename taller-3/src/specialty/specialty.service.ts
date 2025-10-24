import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Specialty } from './entities/specialty.entity';
import { Repository } from 'typeorm';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Injectable()
export class SpecialtyService {
    constructor(
        @InjectRepository(Specialty)
        private specialtyRepository: Repository<Specialty>
    ){}

    /**
     * 
     * @param createSpecialtyDto 
     * @Param 
     * @returns 
     */

    //crear la especialidad
    async create(createSpecialtyDto: CreateSpecialtyDto): Promise<Specialty> {
        const existingSpecialty = await this.specialtyRepository.findOne({
            where: { specialty_name: createSpecialtyDto.specialty_name}
        });
        if (existingSpecialty){
            throw new ConflictException('Esta especialidad ya existe.');
        }

        const newSpecialty = this.specialtyRepository.create(createSpecialtyDto);

        return this.specialtyRepository.save(newSpecialty);
    }

    //lectura de especialidades
    async findAll(): Promise<Specialty[]>{
        return this.specialtyRepository.find();
    }

    async updateSpecialty(id: number, data: UpdateSpecialtyDto ): Promise<Specialty>{
        const specialty = await this.specialtyRepository.findOne({where:{Id_specialty: id}});

        if (!specialty){
            throw new Error(`Especialidad con Id ${id} no encontrada.`);
        }

        if(data.specialty_name && data.specialty_name !== specialty.specialty_name){
            const existingSpecialty = await this.specialtyRepository.findOne({
                where: {specialty_name: data.specialty_name}
            });
            if (existingSpecialty){
                throw new NotFoundException (`Ya existe una especialidad con el nombre ingresado ${data.specialty_name}.`);
            }
        }

        Object.assign(specialty, data);

        const updateSpecialty = await this.specialtyRepository.save(specialty);

        return updateSpecialty;
    }


}
