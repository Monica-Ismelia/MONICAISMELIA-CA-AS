"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetaBillModule = void 0;
const detabill_service_1 = require("./detabill.service");
const detabill_controller_1 = require("./detabill.controller");
const detabill_entity_1 = require("./entities/detabill.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let DetaBillModule = class DetaBillModule {
};
exports.DetaBillModule = DetaBillModule;
exports.DetaBillModule = DetaBillModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detabill_entity_1.DetaBill])],
        providers: [detabill_service_1.DetaBillService],
        controllers: [detabill_controller_1.DetaBillController],
    })
], DetaBillModule);
//# sourceMappingURL=detabill.module.js.map