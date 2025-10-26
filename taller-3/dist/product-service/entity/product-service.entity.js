"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const productserviceType_1 = require("../enum/productserviceType");
const detabill_entity_1 = require("../../detabill/entities/detabill.entity");
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
let ProductService = class ProductService {
};
exports.ProductService = ProductService;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_product_service' }),
    __metadata("design:type", Number)
], ProductService.prototype, "Id_product_service", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], ProductService.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'price', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], ProductService.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'type',
        type: 'enum',
        enum: productserviceType_1.ProductoServiceType,
    }),
    __metadata("design:type", String)
], ProductService.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detabill_entity_1.DetaBill, (detabill) => detabill.productservice),
    __metadata("design:type", Array)
], ProductService.prototype, "detabill", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.productservice),
    __metadata("design:type", Array)
], ProductService.prototype, "appointments", void 0);
exports.ProductService = ProductService = __decorate([
    (0, typeorm_1.Entity)('product_service')
], ProductService);
//# sourceMappingURL=product-service.entity.js.map