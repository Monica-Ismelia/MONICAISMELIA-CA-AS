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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistory = void 0;
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const pet_entity_1 = require("../../pet/entities/pet.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let MedicalHistory = class MedicalHistory {
};
exports.MedicalHistory = MedicalHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MedicalHistory.prototype, "Id_medicalhistory", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], MedicalHistory.prototype, "hist_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], MedicalHistory.prototype, "hist_time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalHistory.prototype, "hist_diagnosys", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalHistory.prototype, "hist_treatment", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.medicalHistory),
    (0, typeorm_1.JoinTable)({
        name: 'usuario_historial',
        joinColumn: {
            name: 'Id_medicalhistory',
            referencedColumnName: 'Id_medicalhistory',
        },
        inverseJoinColumn: {
            name: 'Id_users',
            referencedColumnName: 'Id_users',
        },
    }),
    __metadata("design:type", Array)
], MedicalHistory.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MedicalHistory.prototype, "Id_appo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => appointment_entity_1.Appointment, (appointment) => appointment.medicalHistory),
    (0, typeorm_1.JoinColumn)({ name: 'Id_appo',
        referencedColumnName: 'Id_appo'
    }),
    __metadata("design:type", appointment_entity_1.Appointment)
], MedicalHistory.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], MedicalHistory.prototype, "Id_pet", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pet_entity_1.Pet, (pet) => pet.medicalHistory),
    (0, typeorm_1.JoinColumn)({ name: 'Id_pet',
        referencedColumnName: 'Id_pet'
    }),
    __metadata("design:type", pet_entity_1.Pet)
], MedicalHistory.prototype, "pet", void 0);
exports.MedicalHistory = MedicalHistory = __decorate([
    (0, typeorm_1.Entity)('medical-history')
], MedicalHistory);
//# sourceMappingURL=medical-history.entity.js.map