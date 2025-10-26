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
exports.AppointmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const appointment_entity_1 = require("./entities/appointment.entity");
const appointmentenum_1 = require("./enum/appointmentenum");
const pet_entity_1 = require("../pet/entities/pet.entity");
let AppointmentService = class AppointmentService {
    constructor(appointmentRepository, petRepository) {
        this.appointmentRepository = appointmentRepository;
        this.petRepository = petRepository;
    }
    async create(createAppointmentDto) {
        const { Id_pet } = createAppointmentDto;
        const appoCount = await this.appointmentRepository.count({
            where: {
                Id_pet: Id_pet,
                status: appointmentenum_1.AppointmentStatus.PENDING
            },
        });
        if (appoCount > 1) {
            const pet = await this.petRepository.findOneBy({ Id_pet: Id_pet });
            const petName = pet ? pet.name : `ID ${Id_pet}`;
            throw new common_1.ConflictException(`No se puede crear otra cita para la mascota ${petName} si tiene una en estado pendiente`);
        }
        const appointment = this.appointmentRepository.create(createAppointmentDto);
        return await this.appointmentRepository.save(appointment);
    }
    async findAll() {
        return await this.appointmentRepository.find();
    }
    async findOne(id) {
        const appointment = await this.appointmentRepository.findOneBy({ Id_appo: id });
        if (!appointment) {
            throw new common_1.NotFoundException(`Appointment with ID ${id} not found`);
        }
        return appointment;
    }
    async update(id, updateAppointmentDto) {
        await this.appointmentRepository.update(id, updateAppointmentDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.appointmentRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Cita con el ID ${id} no encontrada`);
        }
        return {
            message: `Cita con el Id ${id} ha sido eliminado.`
        };
    }
    async findMedico(Id_users) {
        const options = Id_users ? { where: { Id_users: +Id_users } } : {};
        return await this.appointmentRepository.find(options);
    }
};
exports.AppointmentService = AppointmentService;
exports.AppointmentService = AppointmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __param(1, (0, typeorm_1.InjectRepository)(pet_entity_1.Pet)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AppointmentService);
//# sourceMappingURL=appointment.service.js.map