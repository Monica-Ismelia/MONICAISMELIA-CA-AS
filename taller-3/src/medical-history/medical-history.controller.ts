import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { CreateMedicalHistoryDto } from './DTO/createmedicalhis.Dto';
import { UpdateMedicalHistoryDto } from './DTO/Updatemedicalhis.Dto';

@Controller('medical-history')
export class MedicalHistoryController {
    constructor(private readonly historyService: MedicalHistoryService){}

    @Post()
    create(@Body() createDto: CreateMedicalHistoryDto){
        return this.historyService.create(createDto);
    }

    @Get()
    findAll(){
        return this.historyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.historyService.findOne(id);
    }

    @Patch(':id') // Usamos PATCH para actualización parcial
        update(
        @Param('id', ParseIntPipe) id: number, 
        @Body() updateDto: UpdateMedicalHistoryDto,
        ) {
        return this.historyService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe)id: number){
        return this.historyService.remove(id);
    }

}
