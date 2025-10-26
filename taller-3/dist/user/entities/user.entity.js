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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const administrative_staff_entity_1 = require("../../administrative-staff/entities/administrative-staff.entity");
const medical_history_entity_1 = require("../../medical-history/entities/medical-history.entity");
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const medical_staff_entity_1 = require("../../medical-staff/entities/medical-staff.entity");
const rol_entities_entity_1 = require("../../rol/entities/rol_entities.entity");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "Id_users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Id_rol' }),
    __metadata("design:type", Number)
], User.prototype, "Id_rol", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => administrative_staff_entity_1.AdministrativeStaff, (administrativeStaff) => administrativeStaff.user),
    __metadata("design:type", administrative_staff_entity_1.AdministrativeStaff)
], User.prototype, "administrativeStaff", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_staff_entity_1.MedicalStaff, (medicalstaff) => medicalstaff.user),
    __metadata("design:type", medical_staff_entity_1.MedicalStaff)
], User.prototype, "medicalstaff", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => medical_history_entity_1.MedicalHistory, (MedicalHistory) => MedicalHistory.users),
    __metadata("design:type", Array)
], User.prototype, "medicalHistory", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.user),
    __metadata("design:type", Array)
], User.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entities_entity_1.Rol, (rol) => rol.users),
    (0, typeorm_1.JoinColumn)({ name: 'Id_rol',
        referencedColumnName: 'Id_rol',
    }),
    __metadata("design:type", rol_entities_entity_1.Rol)
], User.prototype, "rol", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)('users')
], User);
//# sourceMappingURL=user.entity.js.map