import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
export declare class BillController {
    private readonly billService;
    constructor(billService: BillService);
    create(dto: CreateBillDto): Promise<import("./entity/bill.entity").Bill>;
    findAll(): Promise<import("./entity/bill.entity").Bill[]>;
    findOne(id: number): Promise<import("./entity/bill.entity").Bill>;
    update(id: number, dto: UpdateBillDto): Promise<import("./entity/bill.entity").Bill>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
