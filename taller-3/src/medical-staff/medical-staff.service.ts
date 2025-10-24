import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MedicalStaff } from './entities/medical-staff.entity';
import { createMedicoDto } from './medical_staffDTO/medicalStaff.dto';
import { updateMedicoDto } from './medical_staffDTO/updatemedical.dto';

@Injectable()
export class MedicalStaffService {
    constructor(
        @InjectRepository(MedicalStaff)
        private medicalRepository: Repository<MedicalStaff>,

    ){}

    //crear medicos

    async create(createMedicoDto: createMedicoDto): Promise<MedicalStaff>{
        const newMedico = this.medicalRepository.create(createMedicoDto);
        return this.medicalRepository.save(newMedico);
    }

    //Listar medicos

    async findAll (): Promise<MedicalStaff[]>{
        return  this.medicalRepository.find({relations: ['especialidad', 'usuario']});

    }

    async update(id:string, updateMedicoDto: updateMedicoDto): Promise<MedicalStaff>{
        const medico = await this.medicalRepository.findOne({
            where: {identification: id}
        });

        if(!medico){
            throw new NotFoundException(`Personal medico con identificación ${id} no encontrado.`);
        }

        Object.assign(medico, updateMedicoDto);

        return this.medicalRepository.save(medico)
    }
}
