import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetaBill } from './entities/detabill.entity';
import { CreateDetaBillDto } from './dto/create-detabill.dto';
import { UpdateDetaBillDto } from './dto/update-detabill.dto';

@Injectable()
export class DetaBillService {
  constructor(
    @InjectRepository(DetaBill)
    private readonly detaBillRepository: Repository<DetaBill>,
  ) {}

  create(dto: CreateDetaBillDto): Promise<DetaBill> {
    const deta = this.detaBillRepository.create(dto);
    return this.detaBillRepository.save(deta);
  }

  findAll(): Promise<DetaBill[]> {
    return this.detaBillRepository.find({ relations: ['bill', 'productservice'] });
  }

  async findOne(id: number): Promise<DetaBill> {
    const deta = await this.detaBillRepository.findOne({
      where: { Id_detabill: id },
      relations: ['bill', 'productservice'],
    });
    if (!deta) throw new NotFoundException(`DetaBill with id ${id} not found`);
    return deta;
  }

  async update(id: number, dto: UpdateDetaBillDto): Promise<DetaBill> {
    const deta = await this.findOne(id);
    Object.assign(deta, dto);
    return this.detaBillRepository.save(deta);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.detaBillRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`DetaBill with id ${id} not found`);
    return { message: `DetaBill with id ${id} deleted` };
  }
}
