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
exports.ClientOwnerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const client_owner_entity_1 = require("./entities/client-owner.entity");
let ClientOwnerService = class ClientOwnerService {
    constructor(clientOwnerRepository) {
        this.clientOwnerRepository = clientOwnerRepository;
    }
    async create(createClientOwnerDto) {
        const clientOwner = this.clientOwnerRepository.create(createClientOwnerDto);
        return await this.clientOwnerRepository.save(clientOwner);
    }
    async findAll() {
        return await this.clientOwnerRepository.find();
    }
    async findOne(id) {
        const clientOwner = await this.clientOwnerRepository.findOneBy({ Id_client: id });
        if (!clientOwner) {
            throw new common_1.NotFoundException(`Client owner with ID ${id} not found`);
        }
        return clientOwner;
    }
    async update(id, updateClientOwnerDto) {
        await this.clientOwnerRepository.update(id, updateClientOwnerDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.clientOwnerRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Client con el ${id} no encontrado`);
        }
    }
};
exports.ClientOwnerService = ClientOwnerService;
exports.ClientOwnerService = ClientOwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(client_owner_entity_1.ClientOwner)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientOwnerService);
//# sourceMappingURL=client-owner.service.js.map