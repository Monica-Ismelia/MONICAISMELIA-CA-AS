import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { Appointment } from 'src/appointment/entities/appointment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]), TypeOrmModule.forFeature([Appointment])],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
