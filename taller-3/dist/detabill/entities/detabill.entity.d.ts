import { Bill } from '../../bill/entity/bill.entity';
import { ProductService } from '../../product-service/entity/product-service.entity';
export declare class DetaBill {
    Id_detabill: number;
    Id_bill: number;
    Id_product_service: number;
    price: number;
    quantity: number;
    bill: Bill;
    productservice: ProductService;
}
