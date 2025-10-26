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
exports.DetaBillController = void 0;
const common_1 = require("@nestjs/common");
const detabill_service_1 = require("./detabill.service");
const create_detabill_dto_1 = require("./dto/create-detabill.dto");
const update_detabill_dto_1 = require("./dto/update-detabill.dto");
let DetaBillController = class DetaBillController {
    constructor(detaBillService) {
        this.detaBillService = detaBillService;
    }
    create(dto) {
        return this.detaBillService.create(dto);
    }
    findAll() {
        return this.detaBillService.findAll();
    }
    findOne(id) {
        return this.detaBillService.findOne(id);
    }
    update(id, dto) {
        return this.detaBillService.update(id, dto);
    }
    remove(id) {
        return this.detaBillService.remove(id);
    }
};
exports.DetaBillController = DetaBillController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detabill_dto_1.CreateDetaBillDto]),
    __metadata("design:returntype", void 0)
], DetaBillController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetaBillController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DetaBillController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_detabill_dto_1.UpdateDetaBillDto]),
    __metadata("design:returntype", void 0)
], DetaBillController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DetaBillController.prototype, "remove", null);
exports.DetaBillController = DetaBillController = __decorate([
    (0, common_1.Controller)('detabill'),
    __metadata("design:paramtypes", [detabill_service_1.DetaBillService])
], DetaBillController);
//# sourceMappingURL=detabill.controller.js.map