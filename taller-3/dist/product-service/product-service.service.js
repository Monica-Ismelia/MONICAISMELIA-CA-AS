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
exports.ProductServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_service_entity_1 = require("./entity/product-service.entity");
let ProductServiceService = class ProductServiceService {
    constructor(productServiceRepository) {
        this.productServiceRepository = productServiceRepository;
    }
    async create(createDto) {
        const existing = await this.productServiceRepository.findOne({ where: { name: createDto.name } });
        if (existing) {
            throw new common_1.ConflictException(`Product/Service ${createDto.name} already exists`);
        }
        const product = this.productServiceRepository.create(createDto);
        return this.productServiceRepository.save(product);
    }
    async findAll() {
        return this.productServiceRepository.find();
    }
    async findOne(id) {
        const item = await this.productServiceRepository.findOne({ where: { Id_product_service: id } });
        if (!item) {
            throw new common_1.NotFoundException(`Product/Service with Id ${id} not found`);
        }
        return item;
    }
    async update(id, dto) {
        const item = await this.findOne(id);
        Object.assign(item, dto);
        return this.productServiceRepository.save(item);
    }
    async remove(id) {
        const result = await this.productServiceRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Product/Service with Id ${id} not found`);
        }
        return { message: `Product/Service with Id ${id} has been deleted` };
    }
};
exports.ProductServiceService = ProductServiceService;
exports.ProductServiceService = ProductServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_service_entity_1.ProductService)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductServiceService);
//# sourceMappingURL=product-service.service.js.map