import { Repository } from 'typeorm';
import { ProductService } from './entity/product-service.entity';
import { CreateProductServiceDto } from './product-serviceDto/Createproductservice.dto';
import { UpdateproductServiceDto } from './product-serviceDto/UpdateproductService.dto';
export declare class ProductoServicioService {
    private readonly ProductServiceRepository;
    constructor(ProductServiceRepository: Repository<ProductService>);
    create(dto: CreateProductServiceDto): Promise<ProductService>;
    findAll(): Promise<ProductService[]>;
    findOne(id: number): Promise<ProductService>;
    update(id: number, dto: UpdateproductServiceDto): Promise<ProductService>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
