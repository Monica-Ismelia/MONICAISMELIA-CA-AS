import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository, In } from 'typeorm';
import { MedicalHistory } from './entities/medical-history.entity';
import { User } from 'src/user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMedicalHistoryDto } from './DTO/createmedicalhis.Dto';
import { UpdateMedicalHistoryDto } from './DTO/Updatemedicalhis.Dto';

@Injectable()
export class MedicalHistoryService {
  constructor(
    @InjectRepository(MedicalHistory)
    private readonly historyRepository: Repository<MedicalHistory>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createDto: CreateMedicalHistoryDto): Promise<MedicalHistory> {
    const { Id_users, ...historyData } = createDto;

    const users = Id_users && Id_users.length > 0
      ? await this.userRepository.findBy({ Id_users: In(Id_users) })
      : [];

    const newHistory = this.historyRepository.create({
      ...historyData,
      users,
    });

    return await this.historyRepository.save(newHistory);
  }

  async findAll(): Promise<MedicalHistory[]> {
    return await this.historyRepository.find({
      relations: ['users', 'appointment', 'pet'],
    });
  }

  async findOne(id: number): Promise<MedicalHistory> {
    const history = await this.historyRepository.findOne({
      where: { Id_medicalhistory: id },
      relations: ['users', 'appointment', 'pet'],
    });

    if (!history) {
      throw new NotFoundException(`Historial médico con el Id ${id} no fue encontrado`);
    }
    return history;
  }

  async update(id: number, updateDto: UpdateMedicalHistoryDto): Promise<MedicalHistory> {
    const history = await this.findOne(id);
    const { Id_users, ...updateData } = updateDto;

    Object.assign(history, updateData);

    if (Id_users && Id_users.length > 0) {
      history.users = await this.userRepository.findBy({ Id_users: In(Id_users) });
    }

    return await this.historyRepository.save(history);
  }

  async remove(id: number): Promise<void> {
    const result = await this.historyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Medical history with ID ${id} not found`);
    }
  }
}
