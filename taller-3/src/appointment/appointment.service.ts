import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Appointment } from './entities/appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { AppointmentStatus } from './enum/appointmentenum';
import { Pet } from 'src/pet/entities/pet.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto): Promise<Appointment> {
    const {Id_pet } = createAppointmentDto;
    const appoCount = await this.appointmentRepository.count({
      where: {
        Id_pet: Id_pet,
        status: AppointmentStatus.PENDING
      },
    });

    if(appoCount > 1){
      const pet = await this.petRepository.findOneBy({Id_pet: Id_pet});

      const petName = pet ? pet.name : `ID ${Id_pet}`;
      throw new ConflictException(
        `No se puede crear otra cita para la mascota ${petName} si tiene una en estado pendiente`
      );
    }

    const appointment = this.appointmentRepository.create(createAppointmentDto);
    return await this.appointmentRepository.save(appointment);
  }

  
  async findAll(): Promise<Appointment[]> {
    return await this.appointmentRepository.find();
  }

  async findOne(id: number): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findOneBy({ Id_appo: id });
    if (!appointment) {
      throw new NotFoundException(`Appointment with ID ${id} not found`);
    }
    return appointment;
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto): Promise<Appointment> {
    await this.appointmentRepository.update(id, updateAppointmentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{message: string}> {
    const result = await this.appointmentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Cita con el ID ${id} no encontrada`);
    }

    return{
      message: `Cita con el Id ${id} ha sido eliminado.`
    };
  }

  async findMedico(Id_users?: string): Promise<Appointment[]>{
    const options = Id_users ? {where: {Id_users: + Id_users}} :{};
    return await this.appointmentRepository.find(options);
  }


}