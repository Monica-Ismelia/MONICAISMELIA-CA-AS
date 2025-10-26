"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistoryModule = void 0;
const common_1 = require("@nestjs/common");
const medical_history_controller_1 = require("./medical-history.controller");
const medical_history_service_1 = require("./medical-history.service");
const typeorm_1 = require("@nestjs/typeorm");
const medical_history_entity_1 = require("./entities/medical-history.entity");
const user_entity_1 = require("../user/entities/user.entity");
let MedicalHistoryModule = class MedicalHistoryModule {
};
exports.MedicalHistoryModule = MedicalHistoryModule;
exports.MedicalHistoryModule = MedicalHistoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medical_history_entity_1.MedicalHistory]), typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [medical_history_controller_1.MedicalHistoryController],
        providers: [medical_history_service_1.MedicalHistoryService]
    })
], MedicalHistoryModule);
//# sourceMappingURL=medical-history.module.js.map