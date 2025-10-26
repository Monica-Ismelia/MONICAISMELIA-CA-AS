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
exports.BillService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bill_entity_1 = require("./entity/bill.entity");
let BillService = class BillService {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    create(dto) {
        const bill = this.billRepository.create(dto);
        return this.billRepository.save(bill);
    }
    findAll() {
        return this.billRepository.find({ relations: ['client', 'detabill', 'appointment'] });
    }
    async findOne(id) {
        const bill = await this.billRepository.findOne({
            where: { Id_bill: id },
            relations: ['client', 'detabill', 'appointment'],
        });
        if (!bill)
            throw new common_1.NotFoundException(`Bill with id ${id} not found`);
        return bill;
    }
    async update(id, dto) {
        const bill = await this.findOne(id);
        Object.assign(bill, dto);
        return this.billRepository.save(bill);
    }
    async remove(id) {
        const result = await this.billRepository.delete(id);
        if (result.affected === 0)
            throw new common_1.NotFoundException(`Bill with id ${id} not found`);
        return { message: `Bill with id ${id} deleted` };
    }
};
exports.BillService = BillService;
exports.BillService = BillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(bill_entity_1.Bill)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BillService);
//# sourceMappingURL=bill.service.js.map