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
exports.createMedicoDto = void 0;
const class_validator_1 = require("class-validator");
class createMedicoDto {
}
exports.createMedicoDto = createMedicoDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 15),
    __metadata("design:type", String)
], createMedicoDto.prototype, "identification", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsPhoneNumber)('CO', { message: 'El número de celular debe ser valido' }),
    (0, class_validator_1.Length)(1, 15),
    __metadata("design:type", String)
], createMedicoDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El ID de la especialidad es obligatorio.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID de la especialidad debe ser un número.' }),
    __metadata("design:type", Number)
], createMedicoDto.prototype, "Id_specialty", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El ID del uusario debe ser un número' }),
    __metadata("design:type", Number)
], createMedicoDto.prototype, "Id_users", void 0);
//# sourceMappingURL=medicalStaff.dto.js.map