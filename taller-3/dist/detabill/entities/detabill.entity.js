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
exports.DetaBill = void 0;
const typeorm_1 = require("typeorm");
const bill_entity_1 = require("../../bill/entity/bill.entity");
const product_service_entity_1 = require("../../product-service/entity/product-service.entity");
let DetaBill = class DetaBill {
};
exports.DetaBill = DetaBill;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_detabill' }),
    __metadata("design:type", Number)
], DetaBill.prototype, "Id_detabill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetaBill.prototype, "Id_bill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], DetaBill.prototype, "Id_product_service", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], DetaBill.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], DetaBill.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => bill_entity_1.Bill, (bill) => bill.detabill),
    (0, typeorm_1.JoinColumn)({ name: 'Id_bill', referencedColumnName: 'Id_bill' }),
    __metadata("design:type", bill_entity_1.Bill)
], DetaBill.prototype, "bill", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_service_entity_1.ProductService, (productService) => productService.detabill),
    (0, typeorm_1.JoinColumn)({ name: 'Id_product_service', referencedColumnName: 'Id_product_service' }),
    __metadata("design:type", product_service_entity_1.ProductService)
], DetaBill.prototype, "productservice", void 0);
exports.DetaBill = DetaBill = __decorate([
    (0, typeorm_1.Entity)('detabill')
], DetaBill);
//# sourceMappingURL=detabill.entity.js.map