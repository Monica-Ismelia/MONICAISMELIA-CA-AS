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
exports.PetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pet_entity_1 = require("./entities/pet.entity");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
const appointmentenum_1 = require("../appointment/enum/appointmentenum");
let PetService = class PetService {
    constructor(petRepository, appointmentRepository) {
        this.petRepository = petRepository;
        this.appointmentRepository = appointmentRepository;
    }
    async create(createPetDto) {
        const pet = this.petRepository.create(createPetDto);
        return await this.petRepository.save(pet);
    }
    async findAll() {
        return await this.petRepository.find();
    }
    async findOne(id) {
        const pet = await this.petRepository.findOneBy({ Id_pet: id });
        if (!pet) {
            throw new common_1.NotFoundException(`Pet with ID ${id} not found`);
        }
        return pet;
    }
    async update(id, updatePetDto) {
        await this.petRepository.update(id, updatePetDto);
        return this.findOne(id);
    }
    async remove(id) {
        const appointmentPending = await this.appointmentRepository.count({
            where: {
                Id_pet: id,
                status: appointmentenum_1.AppointmentStatus.PENDING
            },
        });
        if (appointmentPending > 0) {
            throw new common_1.ConflictException(`La mascota con el ID ${id} no se puede eliminar porque tiene ${appointmentPending} citas con el estado "Pendiente".`);
        }
        const result = await this.petRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Mascota con el ID ${id} no fue encontrada`);
        }
        return {
            message: `La mascota con el ID ${id} ha sido elimida.`
        };
    }
};
exports.PetService = PetService;
exports.PetService = PetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __param(1, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PetService);
//# sourceMappingURL=pet.service.js.map