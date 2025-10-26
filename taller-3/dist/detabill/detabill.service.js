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
exports.DetaBillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const detabill_entity_1 = require("./entities/detabill.entity");
let DetaBillService = class DetaBillService {
    constructor(detaBillRepository) {
        this.detaBillRepository = detaBillRepository;
    }
    create(dto) {
        const deta = this.detaBillRepository.create(dto);
        return this.detaBillRepository.save(deta);
    }
    findAll() {
        return this.detaBillRepository.find({ relations: ['bill', 'productservice'] });
    }
    async findOne(id) {
        const deta = await this.detaBillRepository.findOne({
            where: { Id_detabill: id },
            relations: ['bill', 'productservice'],
        });
        if (!deta)
            throw new common_1.NotFoundException(`DetaBill with id ${id} not found`);
        return deta;
    }
    async update(id, dto) {
        const deta = await this.findOne(id);
        Object.assign(deta, dto);
        return this.detaBillRepository.save(deta);
    }
    async remove(id) {
        const result = await this.detaBillRepository.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`DetaBill with id ${id} not found`);
        return { message: `DetaBill with id ${id} deleted` };
    }
};
exports.DetaBillService = DetaBillService;
exports.DetaBillService = DetaBillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(detabill_entity_1.DetaBill)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DetaBillService);
//# sourceMappingURL=detabill.service.js.map