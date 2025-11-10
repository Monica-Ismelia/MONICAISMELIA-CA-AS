import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Appointment } from 'src/appointment/entities/appointment.entity';
import { AppointmentStatus } from 'src/appointment/enum/appointmentenum';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,

    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = this.petRepository.create(createPetDto);
    return await this.petRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    const pet = await this.petRepository.findOneBy({ Id_pet: id });
    if (!pet) {
      throw new NotFoundException(`Pet with ID ${id} not found`);
    }
    return pet;
  }

  async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    await this.petRepository.update(id, updatePetDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<{message: string}> {
    const appointmentPending = await this.appointmentRepository.count({
      where: {
        Id_pet: id,
        status: AppointmentStatus.PENDING
      },
    });

    if (appointmentPending > 0){
      throw new ConflictException(
        `La mascota con el ID ${id} no se puede eliminar porque tiene ${appointmentPending} citas con el estado "Pendiente".`
      );
    }

    const result = await this.petRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Mascota con el ID ${id} no fue encontrada`);
    }
    return {
      message: `La mascota con el ID ${id} ha sido elimida.`
    };
  }
}
