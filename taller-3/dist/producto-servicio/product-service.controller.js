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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceController = void 0;
const common_1 = require("@nestjs/common");
const produc_service_service_1 = require("./produc-service.service");
const Createproductservice_dto_1 = require("./product-serviceDto/Createproductservice.dto");
const UpdateproductService_dto_1 = require("./product-serviceDto/UpdateproductService.dto");
let ProductServiceController = class ProductServiceController {
    constructor(productServicioService) {
        this.productServicioService = productServicioService;
    }
    create(createProductServicioDto) {
        return this.productServicioService.create(createProductServicioDto);
    }
    findAll() {
        return this.productServicioService.findAll();
    }
    update(id, updateProductServiceDto) {
        return this.productServicioService.update(id, updateProductServiceDto);
    }
    remove(id) {
        return this.productServicioService.remove(id);
    }
};
exports.ProductServiceController = ProductServiceController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Createproductservice_dto_1.CreateProductServiceDto]),
    __metadata("design:returntype", Promise)
], ProductServiceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductServiceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateproductService_dto_1.UpdateproductServiceDto]),
    __metadata("design:returntype", Promise)
], ProductServiceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductServiceController.prototype, "remove", null);
exports.ProductServiceController = ProductServiceController = __decorate([
    (0, common_1.Controller)('produc-service'),
    __metadata("design:paramtypes", [produc_service_service_1.ProductoServicioService])
], ProductServiceController);
//# sourceMappingURL=product-service.controller.js.map