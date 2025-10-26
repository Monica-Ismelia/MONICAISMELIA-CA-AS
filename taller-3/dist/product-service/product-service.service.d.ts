import { Repository } from 'typeorm';
import { ProductService } from './entity/product-service.entity';
import { CreateProductServiceDto } from './dto/CreateProductService.dto';
import { UpdateProductServiceDto } from './dto/UpdateProductService.dto';
export declare class ProductServiceService {
    private readonly productServiceRepository;
    constructor(productServiceRepository: Repository<ProductService>);
    create(createDto: CreateProductServiceDto): Promise<ProductService>;
    findAll(): Promise<ProductService[]>;
    findOne(id: number): Promise<ProductService>;
    update(id: number, dto: UpdateProductServiceDto): Promise<ProductService>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
