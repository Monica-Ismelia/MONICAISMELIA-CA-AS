"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetaBillDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_detabill_dto_1 = require("./create-detabill.dto");
class UpdateDetaBillDto extends (0, mapped_types_1.PartialType)(create_detabill_dto_1.CreateDetaBillDto) {
}
exports.UpdateDetaBillDto = UpdateDetaBillDto;
//# sourceMappingURL=update-detabill.dto.js.map