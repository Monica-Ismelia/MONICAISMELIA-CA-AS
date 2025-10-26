import { Repository } from 'typeorm';
import { Bill } from './entity/bill.entity';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
export declare class BillService {
    private readonly billRepository;
    constructor(billRepository: Repository<Bill>);
    create(dto: CreateBillDto): Promise<Bill>;
    findAll(): Promise<Bill[]>;
    findOne(id: number): Promise<Bill>;
    update(id: number, dto: UpdateBillDto): Promise<Bill>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
