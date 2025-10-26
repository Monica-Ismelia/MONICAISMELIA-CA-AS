"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const client_owner_module_1 = require("./client-owner/client-owner.module");
const pet_module_1 = require("./pet/pet.module");
const appointment_module_1 = require("./appointment/appointment.module");
const administrative_staff_module_1 = require("./administrative-staff/administrative-staff.module");
const medical_staff_module_1 = require("./medical-staff/medical-staff.module");
const specialty_module_1 = require("./specialty/specialty.module");
const rol_module_1 = require("./rol/rol.module");
const medical_history_module_1 = require("./medical-history/medical-history.module");
const bill_module_1 = require("./bill/bill.module");
const detabill_module_1 = require("./detabill/detabill.module");
const product_service_module_1 = require("./product-service/product-service.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'Moni1981',
                database: 'veterinary_clinic',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            user_module_1.UserModule,
            client_owner_module_1.ClientOwnerModule,
            pet_module_1.PetModule,
            appointment_module_1.AppointmentModule,
            administrative_staff_module_1.AdministrativeStaffModule,
            medical_staff_module_1.MedicalStaffModule,
            specialty_module_1.SpecialtyModule,
            rol_module_1.RolModule,
            medical_history_module_1.MedicalHistoryModule,
            bill_module_1.BillModule,
            product_service_module_1.ProductServiceModule,
            detabill_module_1.DetaBillModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map