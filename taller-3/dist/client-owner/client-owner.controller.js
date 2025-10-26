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
exports.ClientOwnerController = void 0;
const common_1 = require("@nestjs/common");
const client_owner_service_1 = require("./client-owner.service");
const create_client_owner_dto_1 = require("./dto/create-client-owner.dto");
const update_client_owner_dto_1 = require("./dto/update-client-owner.dto");
let ClientOwnerController = class ClientOwnerController {
    constructor(clientOwnerService) {
        this.clientOwnerService = clientOwnerService;
    }
    create(createClientOwnerDto) {
        return this.clientOwnerService.create(createClientOwnerDto);
    }
    findAll() {
        return this.clientOwnerService.findAll();
    }
    findOne(id) {
        return this.clientOwnerService.findOne(id);
    }
    update(id, updateClientOwnerDto) {
        return this.clientOwnerService.update(id, updateClientOwnerDto);
    }
    remove(id) {
        return this.clientOwnerService.remove(id);
    }
};
exports.ClientOwnerController = ClientOwnerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_client_owner_dto_1.CreateClientOwnerDto]),
    __metadata("design:returntype", void 0)
], ClientOwnerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientOwnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientOwnerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_client_owner_dto_1.UpdateClientOwnerDto]),
    __metadata("design:returntype", void 0)
], ClientOwnerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ClientOwnerController.prototype, "remove", null);
exports.ClientOwnerController = ClientOwnerController = __decorate([
    (0, common_1.Controller)('client-owners'),
    __metadata("design:paramtypes", [client_owner_service_1.ClientOwnerService])
], ClientOwnerController);
//# sourceMappingURL=client-owner.controller.js.map