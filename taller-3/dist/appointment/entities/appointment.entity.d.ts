import { AppointmentStatus } from "../enum/appointmentenum";
import { Bill } from "../../bill/entity/bill.entity";
import { Pet } from "../../pet/entities/pet.entity";
import { User } from "../../user/entities/user.entity";
import { MedicalHistory } from "../../medical-history/entities/medical-history.entity";
import { ProductService } from "../../product-service/entity/product-service.entity";
export declare class Appointment {
    Id_appo: number;
    date: string;
    time: string;
    reason: string;
    value: number;
    status: AppointmentStatus;
    detail_type: string;
    createdAt: Date;
    updatedAt: Date;
    Id_bill: number;
    bill: Bill;
    Id_pet: number;
    pet: Pet;
    Id_users: number;
    user: User;
    medicalHistory: MedicalHistory[];
    Id_product_service: number;
    productservice: ProductService;
}
