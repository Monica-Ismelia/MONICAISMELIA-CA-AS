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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const appointment_entity_1 = require("../appointment/entities/appointment.entity");
let UserService = class UserService {
    constructor(userRepository, AppointmentRepository) {
        this.userRepository = userRepository;
        this.AppointmentRepository = AppointmentRepository;
    }
    async create(createUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDto.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException(`El correo ${createUserDto.email} ya está registrado.`);
        }
        const user = this.userRepository.create(createUserDto);
        return await this.userRepository.save(user);
    }
    async findAll() {
        return await this.userRepository.find();
    }
    async findOne(Id_users) {
        const user = await this.userRepository.findOne({
            where: { Id_users },
            relations: ['rol'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`No se encontró el usuario con ID ${Id_users}`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.findOne(id);
        await this.userRepository.update(id, updateUserDto);
        return Object.assign(Object.assign({}, user), updateUserDto);
    }
    async remove(id) {
        const appointmentCount = await this.AppointmentRepository.count({
            where: { Id_users: id },
        });
        if (appointmentCount > 0) {
            throw new common_1.ConflictException(`El usuario con el Id ${id} no se puede eliminar devido a que está asignado a ${appointmentCount} citas medicas.`);
        }
        const resultado = await this.userRepository.delete(id);
        if (resultado.affected === 0) {
            throw new common_1.NotFoundException(`No se encontró el usuario con ID ${id}`);
        }
        return {
            message: ` El usuario con el ID ${id} ha sido eliminado.`
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(appointment_entity_1.Appointment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map