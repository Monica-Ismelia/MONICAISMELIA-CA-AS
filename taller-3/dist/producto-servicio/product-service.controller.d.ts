import { ProductoServicioService } from './produc-service.service';
import { CreateProductServiceDto } from './product-serviceDto/Createproductservice.dto';
import { UpdateproductServiceDto } from './product-serviceDto/UpdateproductService.dto';
import { ProductService } from './entity/product-service.entity';
export declare class ProductServiceController {
    private readonly productServicioService;
    constructor(productServicioService: ProductoServicioService);
    create(createProductServicioDto: CreateProductServiceDto): Promise<ProductService>;
    findAll(): Promise<ProductService[]>;
    update(id: number, updateProductServiceDto: UpdateproductServiceDto): Promise<ProductService>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
