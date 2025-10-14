import { Module } from '@nestjs/common'; // Decorador de módulo de NestJS
import { TypeOrmModule } from '@nestjs/typeorm';// Módulo para integrar TypeORM con NestJS
import { Visit } from './entities/visit.entity';// Importa la entidad Visit
import { VisitService } from './visit.service';// Importa el servicio de citas
import { VisitController } from './visit.controller';// Importa el controlador de citas

@Module({ // Decorador que define un módulo en NestJS
  imports: [TypeOrmModule.forFeature([Visit])], // Importa el módulo TypeOrmModule y registra la entidad Visit
  controllers: [VisitController], // Registra el controlador VisitController
  providers: [VisitService], // Registra el servicio VisitService
}) // Cierra el decorador del módulo
export class VisitModule {} // Exporta la clase VisitModule que es el módulo de citas
