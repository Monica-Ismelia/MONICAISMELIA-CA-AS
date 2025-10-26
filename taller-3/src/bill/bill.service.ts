import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bill } from './entity/bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>,
  ) {}

  create(dto: CreateBillDto): Promise<Bill> {
    const bill = this.billRepository.create(dto);
    return this.billRepository.save(bill);
  }

  findAll(): Promise<Bill[]> {
    return this.billRepository.find({ relations: ['client', 'detabill', 'appointment'] });
  }

  async findOne(id: number): Promise<Bill> {
    const bill = await this.billRepository.findOne({
      where: { Id_bill: id },
      relations: ['client', 'detabill', 'appointment'],
    });
    if (!bill) throw new NotFoundException(`Bill with id ${id} not found`);
    return bill;
  }

  async update(id: number, dto: UpdateBillDto): Promise<Bill> {
    const bill = await this.findOne(id);
    Object.assign(bill, dto);
    return this.billRepository.save(bill);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.billRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Bill with id ${id} not found`);
    return { message: `Bill with id ${id} deleted` };
  }
}
