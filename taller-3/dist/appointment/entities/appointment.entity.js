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
exports.Appointment = void 0;
const typeorm_1 = require("typeorm");
const appointmentenum_1 = require("../enum/appointmentenum");
const bill_entity_1 = require("../../bill/entity/bill.entity");
const pet_entity_1 = require("../../pet/entities/pet.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const medical_history_entity_1 = require("../../medical-history/entities/medical-history.entity");
const product_service_entity_1 = require("../../product-service/entity/product-service.entity");
let Appointment = class Appointment {
};
exports.Appointment = Appointment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Appointment.prototype, "Id_appo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], Appointment.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Appointment.prototype, "reason", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Appointment.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: appointmentenum_1.AppointmentStatus,
        default: appointmentenum_1.AppointmentStatus.PENDING,
        name: "status",
    }),
    __metadata("design:type", String)
], Appointment.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 255 }),
    __metadata("design:type", String)
], Appointment.prototype, "detail_type", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "created_at" }),
    __metadata("design:type", Date)
], Appointment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "updated_at" }),
    __metadata("design:type", Date)
], Appointment.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Appointment.prototype, "Id_bill", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => bill_entity_1.Bill, (bill) => bill.appointment),
    (0, typeorm_1.JoinColumn)({ name: "Id_bill", referencedColumnName: "Id_bill" }),
    __metadata("design:type", bill_entity_1.Bill)
], Appointment.prototype, "bill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "Id_pet", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pet_entity_1.Pet, (pet) => pet.appointments),
    (0, typeorm_1.JoinColumn)({ name: "Id_pet", referencedColumnName: "Id_pet" }),
    __metadata("design:type", pet_entity_1.Pet)
], Appointment.prototype, "pet", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "Id_users", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.appointments),
    (0, typeorm_1.JoinColumn)({ name: "Id_users", referencedColumnName: "Id_users" }),
    __metadata("design:type", user_entity_1.User)
], Appointment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => medical_history_entity_1.MedicalHistory, (medicalhistory) => medicalhistory.appointment),
    __metadata("design:type", Array)
], Appointment.prototype, "medicalHistory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Appointment.prototype, "Id_product_service", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_service_entity_1.ProductService, (productservice) => productservice.appointments),
    (0, typeorm_1.JoinColumn)({
        name: "Id_product_service",
        referencedColumnName: "Id_product_service",
    }),
    __metadata("design:type", product_service_entity_1.ProductService)
], Appointment.prototype, "productservice", void 0);
exports.Appointment = Appointment = __decorate([
    (0, typeorm_1.Entity)("appointments")
], Appointment);
//# sourceMappingURL=appointment.entity.js.map