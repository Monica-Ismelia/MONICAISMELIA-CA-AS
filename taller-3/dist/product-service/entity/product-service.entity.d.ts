import { ProductoServiceType } from '../enum/productserviceType';
import { DetaBill } from '../../detabill/entities/detabill.entity';
import { Appointment } from 'src/appointment/entities/appointment.entity';
export declare class ProductService {
    Id_product_service: number;
    name: string;
    price: number;
    type: ProductoServiceType;
    detabill: DetaBill[];
    appointments: Appointment[];
}
