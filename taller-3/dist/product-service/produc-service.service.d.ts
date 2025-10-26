import { Repository } from 'typeorm';
import { ProductService } from './entity/product-service.entity';
import { CreateProductServiceDto } from './dto/create-product-service.dto';
export declare class ProductServiceService {
    private readonly productServiceRepository;
    constructor(productServiceRepository: Repository<ProductService>);
    create(createDto: CreateProductServiceDto): Promise<ProductService>;
}
