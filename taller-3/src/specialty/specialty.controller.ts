import { Body, ConflictException, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { Specialty } from './entities/specialty.entity';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';

@Controller('specialty')
export class SpecialtyController {
    constructor(private readonly specialtyService: SpecialtyService ) {}

    /** 
     * @method: POST
     * @route: /specialty
     * @param
     * @returns
     * 
    */

    //Crear las entidades

    @Post()
    async create(@Body() CreateSpecialtyDto: CreateSpecialtyDto): Promise<Specialty>{
        try{
            return await this.specialtyService.create(CreateSpecialtyDto);
        } catch (error){
            if (error.message.includes('Ya exite esta es pecialidad')) {
                throw new ConflictException(error.message);
            }

            throw error;
        }

    }

    //Listar las especiazlidades ya creadas
    @Get()
    async findAll(): Promise<Specialty[]>{
        return this.specialtyService.findAll();
    }

    @Patch(':id')
    async update(
        @Param ('id', ParseIntPipe) id: number,
        @Body() UpdateSpecialtyDto: UpdateSpecialtyDto,
    ): Promise<Specialty> {
        const specialtyUpdate = await this.specialtyService.updateSpecialty(
            id,
            UpdateSpecialtyDto,
        );

        return specialtyUpdate;

    }
}

