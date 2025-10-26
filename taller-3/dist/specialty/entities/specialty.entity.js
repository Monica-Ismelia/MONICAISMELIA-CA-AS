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
exports.Specialty = void 0;
const medical_staff_entity_1 = require("../../medical-staff/entities/medical-staff.entity");
const typeorm_1 = require("typeorm");
let Specialty = class Specialty {
};
exports.Specialty = Specialty;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Specialty.prototype, "Id_specialty", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Specialty.prototype, "specialty_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medical_staff_entity_1.MedicalStaff, (medicalstaff) => medicalstaff.specialty),
    __metadata("design:type", Array)
], Specialty.prototype, "medicalstaff", void 0);
exports.Specialty = Specialty = __decorate([
    (0, typeorm_1.Entity)('specialty')
], Specialty);
//# sourceMappingURL=specialty.entity.js.map