import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointment.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { Pet } from 'src/pet/entities/pet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Appointment]), TypeOrmModule.forFeature([Pet])],
  providers: [AppointmentService],
  controllers: [AppointmentController]
})
export class AppointmentModule {}
