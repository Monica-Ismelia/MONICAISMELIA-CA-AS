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
exports.MedicalStaffService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medical_staff_entity_1 = require("./entities/medical-staff.entity");
let MedicalStaffService = class MedicalStaffService {
    constructor(medicalRepository) {
        this.medicalRepository = medicalRepository;
    }
    async create(createMedicoDto) {
        const newMedico = this.medicalRepository.create(createMedicoDto);
        return this.medicalRepository.save(newMedico);
    }
    async findAll() {
        return this.medicalRepository.find({ relations: ['specialty', 'users'] });
    }
    async update(id, updateMedicoDto) {
        const medico = await this.medicalRepository.findOne({
            where: { identification: id }
        });
        if (!medico) {
            throw new common_1.NotFoundException(`Personal medico con identificación ${id} no encontrado.`);
        }
        Object.assign(medico, updateMedicoDto);
        return this.medicalRepository.save(medico);
    }
    async remove(id) {
        const result = await this.medicalRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Medico con el ID ${id} no encontrado`);
        }
        return {
            message: `El Medico con el ID ${id} ha sido eliminado.`
        };
    }
};
exports.MedicalStaffService = MedicalStaffService;
exports.MedicalStaffService = MedicalStaffService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medical_staff_entity_1.MedicalStaff)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicalStaffService);
//# sourceMappingURL=medical-staff.service.js.map