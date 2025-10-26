"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuditLoggingInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let AuditLoggingInterceptor = AuditLoggingInterceptor_1 = class AuditLoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(AuditLoggingInterceptor_1.name);
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const { method, url, user } = request;
        const username = (user === null || user === void 0 ? void 0 : user.username) || 'anonymous';
        const role = (user === null || user === void 0 ? void 0 : user.role) || 'no-role';
        const start = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const duration = Date.now() - start;
            this.logger.log(`👤 Usuario: ${username} (Rol: ${role}) ejecutó ${method} ${url} en ${duration}ms`);
        }));
    }
};
exports.AuditLoggingInterceptor = AuditLoggingInterceptor;
exports.AuditLoggingInterceptor = AuditLoggingInterceptor = AuditLoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], AuditLoggingInterceptor);
//# sourceMappingURL=audit-logging.interceptor.js.map