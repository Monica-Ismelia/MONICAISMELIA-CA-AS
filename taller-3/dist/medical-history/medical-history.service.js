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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const medical_history_entity_1 = require("./entities/medical-history.entity");
const user_entity_1 = require("../user/entities/user.entity");
const typeorm_2 = require("@nestjs/typeorm");
let MedicalHistoryService = class MedicalHistoryService {
    constructor(historyRepository, userRepository) {
        this.historyRepository = historyRepository;
        this.userRepository = userRepository;
    }
    async create(createDto) {
        const { Id_users } = createDto, historyData = __rest(createDto, ["Id_users"]);
        const users = Id_users && Id_users.length > 0
            ? await this.userRepository.findBy({ Id_users: (0, typeorm_1.In)(Id_users) })
            : [];
        const newHistory = this.historyRepository.create(Object.assign(Object.assign({}, historyData), { users }));
        return await this.historyRepository.save(newHistory);
    }
    async findAll() {
        return await this.historyRepository.find({
            relations: ['users', 'appointment', 'pet'],
        });
    }
    async findOne(id) {
        const history = await this.historyRepository.findOne({
            where: { Id_medicalhistory: id },
            relations: ['users', 'appointment', 'pet'],
        });
        if (!history) {
            throw new common_1.NotFoundException(`Historial médico con el Id ${id} no fue encontrado`);
        }
        return history;
    }
    async update(id, updateDto) {
        const history = await this.findOne(id);
        const { Id_users } = updateDto, updateData = __rest(updateDto, ["Id_users"]);
        Object.assign(history, updateData);
        if (Id_users && Id_users.length > 0) {
            history.users = await this.userRepository.findBy({ Id_users: (0, typeorm_1.In)(Id_users) });
        }
        return await this.historyRepository.save(history);
    }
    async remove(id) {
        const result = await this.historyRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Medical history with ID ${id} not found`);
        }
    }
};
exports.MedicalHistoryService = MedicalHistoryService;
exports.MedicalHistoryService = MedicalHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(medical_history_entity_1.MedicalHistory)),
    __param(1, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], MedicalHistoryService);
//# sourceMappingURL=medical-history.service.js.map