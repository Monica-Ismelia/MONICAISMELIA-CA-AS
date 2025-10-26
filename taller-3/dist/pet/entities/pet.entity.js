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
exports.Pet = void 0;
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const client_owner_entity_1 = require("../../client-owner/entities/client-owner.entity");
const medical_history_entity_1 = require("../../medical-history/entities/medical-history.entity");
const typeorm_1 = require("typeorm");
let Pet = class Pet {
};
exports.Pet = Pet;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_pet' }),
    __metadata("design:type", Number)
], Pet.prototype, "Id_pet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "species", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "breed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Pet.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Pet.prototype, "weight", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Pet.prototype, "observations", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Pet.prototype, "Id_client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_owner_entity_1.ClientOwner, (clientOwner) => clientOwner.pets),
    (0, typeorm_1.JoinColumn)({
        name: 'Id_client',
        referencedColumnName: 'Id_client'
    }),
    __metadata("design:type", client_owner_entity_1.ClientOwner)
], Pet.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointment_entity_1.Appointment, (appointment) => appointment.pet),
    __metadata("design:type", Array)
], Pet.prototype, "appointments", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => medical_history_entity_1.MedicalHistory, (medicalHistory) => medicalHistory.pet),
    __metadata("design:type", medical_history_entity_1.MedicalHistory)
], Pet.prototype, "medicalHistory", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Pet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], Pet.prototype, "updatedAt", void 0);
exports.Pet = Pet = __decorate([
    (0, typeorm_1.Entity)('pets')
], Pet);
//# sourceMappingURL=pet.entity.js.map