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
exports.ClientOwner = void 0;
const bill_entity_1 = require("../../bill/entity/bill.entity");
const pet_entity_1 = require("../../pet/entities/pet.entity");
const rol_entities_entity_1 = require("../../rol/entities/rol_entities.entity");
const typeorm_1 = require("typeorm");
let ClientOwner = class ClientOwner {
};
exports.ClientOwner = ClientOwner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'Id_client' }),
    __metadata("design:type", Number)
], ClientOwner.prototype, "Id_client", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientOwner.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientOwner.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ClientOwner.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ClientOwner.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entities_entity_1.Rol, (rol) => rol.clientOwners),
    (0, typeorm_1.JoinColumn)({ name: 'id_rol' }),
    __metadata("design:type", rol_entities_entity_1.Rol)
], ClientOwner.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pet_entity_1.Pet, (pet) => pet.client),
    __metadata("design:type", Array)
], ClientOwner.prototype, "pets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => bill_entity_1.Bill, (bill) => bill.client),
    __metadata("design:type", Array)
], ClientOwner.prototype, "bills", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ClientOwner.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ClientOwner.prototype, "updatedAt", void 0);
exports.ClientOwner = ClientOwner = __decorate([
    (0, typeorm_1.Entity)('client_owners')
], ClientOwner);
//# sourceMappingURL=client-owner.entity.js.map