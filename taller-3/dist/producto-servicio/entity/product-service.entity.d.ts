import { ProductoServiceType } from "../enum/productserviceType";
import { DetaBill } from "../../detabill/entities/detabill.entity";
import { Appointment } from "../../appointment/entities/appointment.entity";
export declare class ProductService {
    Id_product_service: number;
    prod_name: string;
    prod_price: number;
    prod_type: ProductoServiceType;
    detabill: DetaBill[];
    appointments: Appointment[];
}
