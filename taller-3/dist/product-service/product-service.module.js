"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServiceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_service_entity_1 = require("./entity/product-service.entity");
const product_service_controller_1 = require("./product-service.controller");
const product_service_service_1 = require("./product-service.service");
let ProductServiceModule = class ProductServiceModule {
};
exports.ProductServiceModule = ProductServiceModule;
exports.ProductServiceModule = ProductServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_service_entity_1.ProductService])],
        controllers: [product_service_controller_1.ProductServiceController],
        providers: [product_service_service_1.ProductServiceService],
    })
], ProductServiceModule);
//# sourceMappingURL=product-service.module.js.map