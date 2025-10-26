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
exports.Bill = void 0;
const typeorm_1 = require("typeorm");
const appointment_entity_1 = require("../../appointment/entities/appointment.entity");
const client_owner_entity_1 = require("../../client-owner/entities/client-owner.entity");
const detabill_entity_1 = require("../../detabill/entities/detabill.entity");
let Bill = class Bill {
};
exports.Bill = Bill;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_bill' }),
    __metadata("design:type", Number)
], Bill.prototype, "Id_bill", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], Bill.prototype, "fac_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Bill.prototype, "fac_total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Bill.prototype, "Id_client", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => client_owner_entity_1.ClientOwner, (clientOwner) => clientOwner.bills),
    (0, typeorm_1.JoinColumn)({ name: 'Id_client', referencedColumnName: 'Id_client' }),
    __metadata("design:type", client_owner_entity_1.ClientOwner)
], Bill.prototype, "client", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => appointment_entity_1.Appointment, (appointment) => appointment.bill),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", appointment_entity_1.Appointment)
], Bill.prototype, "appointment", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => detabill_entity_1.DetaBill, (detabill) => detabill.bill),
    __metadata("design:type", Array)
], Bill.prototype, "detabill", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], Bill.prototype, "createdAt", void 0);
exports.Bill = Bill = __decorate([
    (0, typeorm_1.Entity)('bill')
], Bill);
//# sourceMappingURL=bill.entity.js.map