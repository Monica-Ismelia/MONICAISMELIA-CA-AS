"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_NAMES = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["ADMIN"] = 1] = "ADMIN";
    UserRole[UserRole["VETERINARIO"] = 2] = "VETERINARIO";
    UserRole[UserRole["ASISTENTE"] = 3] = "ASISTENTE";
    UserRole[UserRole["CLIENTE"] = 4] = "CLIENTE";
})(UserRole || (exports.UserRole = UserRole = {}));
exports.ROLE_NAMES = {
    [UserRole.ADMIN]: 'Administrador',
    [UserRole.VETERINARIO]: 'Veterinario',
    [UserRole.ASISTENTE]: 'Asistente',
    [UserRole.CLIENTE]: 'Cliente',
};
//# sourceMappingURL=user-role.enum.js.map