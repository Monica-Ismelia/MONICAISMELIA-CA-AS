"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientOwnerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_client_owner_dto_1 = require("./create-client-owner.dto");
class UpdateClientOwnerDto extends (0, mapped_types_1.PartialType)(create_client_owner_dto_1.CreateClientOwnerDto) {
}
exports.UpdateClientOwnerDto = UpdateClientOwnerDto;
//# sourceMappingURL=update-client-owner.dto.js.map