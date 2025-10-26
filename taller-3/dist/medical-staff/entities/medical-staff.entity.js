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
exports.MedicalStaff = void 0;
const class_validator_1 = require("class-validator");
const specialty_entity_1 = require("../../specialty/entities/specialty.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let MedicalStaff = class MedicalStaff {
};
exports.MedicalStaff = MedicalStaff;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", Number)
], MedicalStaff.prototype, "Id_users", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], MedicalStaff.prototype, "identification", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], MedicalStaff.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], MedicalStaff.prototype, "Id_specialty", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.medicalstaff),
    (0, typeorm_1.JoinColumn)({ name: 'Id_users',
        referencedColumnName: 'Id_users'
    }),
    __metadata("design:type", user_entity_1.User)
], MedicalStaff.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialty_entity_1.Specialty, (specialty) => specialty.medicalstaff),
    (0, typeorm_1.JoinColumn)({ name: 'Id_specialty',
        referencedColumnName: 'Id_specialty' }),
    __metadata("design:type", specialty_entity_1.Specialty)
], MedicalStaff.prototype, "specialty", void 0);
exports.MedicalStaff = MedicalStaff = __decorate([
    (0, typeorm_1.Entity)('medical_staff')
], MedicalStaff);
//# sourceMappingURL=medical-staff.entity.js.map