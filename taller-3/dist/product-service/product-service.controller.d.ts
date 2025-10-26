import { ProductServiceService } from './product-service.service';
import { CreateProductServiceDto } from './dto/CreateProductService.dto';
import { UpdateProductServiceDto } from './dto/UpdateProductService.dto';
import { ProductService } from './entity/product-service.entity';
export declare class ProductServiceController {
    private readonly productServiceService;
    constructor(productServiceService: ProductServiceService);
    create(createDto: CreateProductServiceDto): Promise<ProductService>;
    findAll(): Promise<ProductService[]>;
    findOne(id: number): Promise<ProductService>;
    update(id: number, updateDto: UpdateProductServiceDto): Promise<ProductService>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
