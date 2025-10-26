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
exports.SpecialtyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const specialty_entity_1 = require("./entities/specialty.entity");
const typeorm_2 = require("typeorm");
let SpecialtyService = class SpecialtyService {
    constructor(specialtyRepository) {
        this.specialtyRepository = specialtyRepository;
    }
    async create(createSpecialtyDto) {
        const existingSpecialty = await this.specialtyRepository.findOne({
            where: { specialty_name: createSpecialtyDto.specialty_name }
        });
        if (existingSpecialty) {
            throw new common_1.ConflictException('Esta especialidad ya existe.');
        }
        const newSpecialty = this.specialtyRepository.create(createSpecialtyDto);
        return this.specialtyRepository.save(newSpecialty);
    }
    async findAll() {
        return this.specialtyRepository.find();
    }
    async updateSpecialty(id, data) {
        const specialty = await this.specialtyRepository.findOne({ where: { Id_specialty: id } });
        if (!specialty) {
            throw new Error(`Especialidad con Id ${id} no encontrada.`);
        }
        if (data.specialty_name && data.specialty_name !== specialty.specialty_name) {
            const existingSpecialty = await this.specialtyRepository.findOne({
                where: { specialty_name: data.specialty_name }
            });
            if (existingSpecialty) {
                throw new common_1.NotFoundException(`Ya existe una especialidad con el nombre ingresado ${data.specialty_name}.`);
            }
        }
        Object.assign(specialty, data);
        const updateSpecialty = await this.specialtyRepository.save(specialty);
        return updateSpecialty;
    }
};
exports.SpecialtyService = SpecialtyService;
exports.SpecialtyService = SpecialtyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(specialty_entity_1.Specialty)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SpecialtyService);
//# sourceMappingURL=specialty.service.js.map