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
exports.MedicalStaffController = void 0;
const common_1 = require("@nestjs/common");
const medical_staff_service_1 = require("./medical-staff.service");
const medicalStaff_dto_1 = require("./medical_staffDTO/medicalStaff.dto");
const updatemedical_dto_1 = require("./medical_staffDTO/updatemedical.dto");
let MedicalStaffController = class MedicalStaffController {
    constructor(medicoService) {
        this.medicoService = medicoService;
    }
    create(createMedicoDto) {
        return this.medicoService.create(createMedicoDto);
    }
    finAll() {
        return this.medicoService.findAll();
    }
    update(id, updateMedicoDto) {
        return this.medicoService.update(id, updateMedicoDto);
    }
    remove(id) {
        return this.medicoService.remove(id);
    }
};
exports.MedicalStaffController = MedicalStaffController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [medicalStaff_dto_1.createMedicoDto]),
    __metadata("design:returntype", Promise)
], MedicalStaffController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicalStaffController.prototype, "finAll", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updatemedical_dto_1.updateMedicoDto]),
    __metadata("design:returntype", Promise)
], MedicalStaffController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], MedicalStaffController.prototype, "remove", null);
exports.MedicalStaffController = MedicalStaffController = __decorate([
    (0, common_1.Controller)('medical-staff'),
    __metadata("design:paramtypes", [medical_staff_service_1.MedicalStaffService])
], MedicalStaffController);
//# sourceMappingURL=medical-staff.controller.js.map