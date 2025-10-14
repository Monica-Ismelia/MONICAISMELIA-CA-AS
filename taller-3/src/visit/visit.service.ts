import { Injectable } from '@nestjs/common'; // Decorador que marca la clase como un proveedor inyectable
import { InjectRepository } from '@nestjs/typeorm';// Decorador para inyectar un repositorio de TypeORM
import { Repository } from 'typeorm';//
import { Visit } from './entities/visit.entity';// Importa la entidad Visit
import { CreateVisitDto } from './dto/create-visit.dto';// Importa el DTO para crear una nueva cita
import { UpdateVisitDto } from './dto/update-visit.dto';// Importa el DTO para actualizar una cita existente

@Injectable()// Marca la clase como un proveedor inyectable en NestJS
export class VisitService { //  Define la clase VisitService que contiene la lógica de negocio para las citas
  constructor(//  inyección del repositorio de la entidad Visit
    @InjectRepository(Visit)// solicitar el repositorio de la entidad Visit
    private visitRepository: Repository<Visit>, // es el objeto que te permite consultar, guardar, actualizar y eliminar datos de esa tabla.
  ) {}
  // crear una nueva cita
  create(createVisitDto: CreateVisitDto) {// crea una nueva cita en la base de datos
    const visit=this.visitRepository.create({...createVisitDto,
      date:new Date(createVisitDto.date),
    });// crea una nueva instancia de la entidad Visit utilizando los datos proporcionados en el DTO
    return this.visitRepository.save(visit);// guarda la nueva cita en la base de datos y devuelve la cita guardada
  }
 // leer todas las citas
  findAll() {
    return this.visitRepository.find();// devuelve todas las citas almacenadas en la base de datos
  }
  // leer una cita
  findOne(id: number) {
    return this.visitRepository.findOne({where:{id}});// devuelve la cita con el ID proporcionado
  }
 // actualizar una cita
  async update(id: number, updateVisitDto: UpdateVisitDto) { // actualiza la cita con el ID proporcionado utilizando los datos del DTO
    await this.visitRepository.update(id, { // actualiza la cita en la base de datos
      ...updateVisitDto,// desestructura el DTO para obtener los nuevos valores
      date: updateVisitDto.date? new Date(updateVisitDto.date):undefined,// convierte la cadena de fecha a un objeto Date si se proporciona una nueva fecha   

    });
    return this.findOne(id);// devuelve la cita actualizada
  }
// eliminar una cita
  async remove(id: number) { // elimina la cita con el ID proporcionado
    await this.visitRepository.delete(id); // elimina la cita de la base de datos
    return { message: `Cita ${id} eliminada exitosamente` };// devuelve un mensaje de confirmación
  } // Cierra la clase VisitService
}
