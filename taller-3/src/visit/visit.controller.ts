import { Controller, Get, Post,Put,Delete, Body,Param, ParseIntPipe } from '@nestjs/common'; // Importa los decoradores y utilidades necesarias de NestJS
import { VisitService } from './visit.service';// Importa el servicio de citas
import { CreateVisitDto } from './dto/create-visit.dto';  // Importa el DTO para crear una nueva cita 
import { UpdateVisitDto } from './dto/update-visit.dto';// Importa el DTO para actualizar una cita existente

@Controller('visit') // Define el controlador para la ruta 'visit'
export class VisitController { // Define la clase VisitController que maneja las solicitudes HTTP relacionadas con las citas
  constructor(private readonly visitService: VisitService) {} //

  @Post()//Maneja las solicitudes HTTP POST para crear una nueva cita
  create(@Body() createVisitDto: CreateVisitDto) { // Extrae el cuerpo de la solicitud y lo asigna al DTO
      return this.visitService.create(createVisitDto);// Llama al método create del servicio de citas para crear una nueva cita y devuelve el resultado
  } // Cierra el método create

  @Get() // Maneja las solicitudes HTTP GET para obtener todas las citas
  findAll() {// Llama al método findAll del servicio de citas para obtener todas las citas
    return this.visitService.findAll();//  Devuelve la lista de todas las citas
  }// Cierra el método findAll

  @Get(':id') // Maneja las solicitudes HTTP GET para obtener una cita específica por su ID
  findOne(@Param('id', ParseIntPipe) id: number) { // Extrae el parámetro 'id' de la ruta y lo convierte a un número entero
    return this.visitService.findOne(id);// Llama al método findOne del servicio de citas para obtener la cita con el ID proporcionado y devuelve el resultado
  }// Cierra el método findOne

  @Put(':id') // Maneja las solicitudes HTTP PUT para actualizar una cita existente
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVisitDto: UpdateVisitDto) {// Extrae el parámetro 'id' de la ruta y el cuerpo de la solicitud, asignándolo al DTO
    return this.visitService.update(id, updateVisitDto);// Llama al método update del servicio de citas para actualizar la cita con el ID proporcionado y devuelve el resultado
  }// Cierra el método update

  @Delete(':id') // Maneja las solicitudes HTTP DELETE para eliminar una cita existente
  remove(@Param('id', ParseIntPipe) id: number) { // Extrae el parámetro 'id' de la ruta y lo convierte a un número entero
    return this.visitService.remove(id);// Llama al método remove del servicio de citas para eliminar la cita con el ID proporcionado y devuelve el resultado
  }// Cierra el método remove
}
