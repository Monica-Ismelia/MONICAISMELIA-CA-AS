import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DetaBillService } from './detabill.service';
import { CreateDetaBillDto } from './dto/create-detabill.dto';
import { UpdateDetaBillDto } from './dto/update-detabill.dto';

@Controller('detabill')
export class DetaBillController {
  constructor(private readonly detaBillService: DetaBillService) {}

  @Post()
  create(@Body() dto: CreateDetaBillDto) {
    return this.detaBillService.create(dto);
  }

  @Get()
  findAll() {
    return this.detaBillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.detaBillService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDetaBillDto) {
    return this.detaBillService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.detaBillService.remove(id);
  }
}
