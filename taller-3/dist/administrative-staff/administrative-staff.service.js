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
exports.AdministrativeStaffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const administrative_staff_entity_1 = require("./entities/administrative-staff.entity");
let AdministrativeStaffService = class AdministrativeStaffService {
    constructor(adminStaffRepository) {
        this.adminStaffRepository = adminStaffRepository;
    }
    async create(createDto) {
        const staff = this.adminStaffRepository.create(createDto);
        return await this.adminStaffRepository.save(staff);
    }
    async findAll() {
        return await this.adminStaffRepository.find();
    }
    async findOne(id) {
        const staff = await this.adminStaffRepository.findOneBy({ id });
        if (!staff) {
            throw new common_1.NotFoundException(`Administrative staff with ID ${id} not found`);
        }
        return staff;
    }
    async update(id, updateDto) {
        await this.adminStaffRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.adminStaffRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Administrative staff with ID ${id} not found`);
        }
    }
};
exports.AdministrativeStaffService = AdministrativeStaffService;
exports.AdministrativeStaffService = AdministrativeStaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(administrative_staff_entity_1.AdministrativeStaff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdministrativeStaffService);
//# sourceMappingURL=administrative-staff.service.js.map