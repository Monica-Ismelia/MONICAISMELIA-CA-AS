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
exports.RolController = void 0;
const common_1 = require("@nestjs/common");
const rol_service_1 = require("./rol.service");
const rol_dto_1 = require("./rolDto/rol.dto");
let RolController = class RolController {
    constructor(Rolservice) {
        this.Rolservice = Rolservice;
    }
    async create(CreateRolDto) {
        try {
            return await this.Rolservice.create(CreateRolDto);
        }
        catch (error) {
            if (error.message.includes('Este rol ya existe')) {
                throw new common_1.ConflictException(error.message);
            }
            throw error;
        }
    }
    async findAll() {
        return this.Rolservice.findAll();
    }
    remove(id) {
        return this.Rolservice.remove(id);
    }
};
exports.RolController = RolController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rol_dto_1.CreateRolDto]),
    __metadata("design:returntype", Promise)
], RolController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolController.prototype, "remove", null);
exports.RolController = RolController = __decorate([
    (0, common_1.Controller)('rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
//# sourceMappingURL=rol.controller.js.map