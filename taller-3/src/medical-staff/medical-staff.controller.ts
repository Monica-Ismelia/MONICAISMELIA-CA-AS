import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { MedicalStaffService } from './medical-staff.service';
import { createMedicoDto } from './medical_staffDTO/medicalStaff.dto';
import { MedicalStaff } from './entities/medical-staff.entity';
import { updateMedicoDto } from './medical_staffDTO/updatemedical.dto';

@Controller('medical-staff')
export class MedicalStaffController {
    constructor(private readonly medicoService: MedicalStaffService){}

    //Crear medicos

    @Post()
    create(@Body()createMedicoDto: createMedicoDto): Promise<MedicalStaff>{
        return this.medicoService.create(createMedicoDto);
    }

    //Listar medicos

    @Get()
    finAll(): Promise<MedicalStaff[]>{
        return this.medicoService.findAll();
    }

    //Actualizar por Id de identificación

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateMedicoDto: updateMedicoDto,
    ): Promise<MedicalStaff>{
        return this.medicoService.update(id, updateMedicoDto);
    }

}
