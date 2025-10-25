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
const operators_1 = require("rxjs/operators");
let AuditLoggingInterceptor = AuditLoggingInterceptor_1 = class AuditLoggingInterceptor {
    constructor() {
        this.logger = new common_1.Logger(AuditLoggingInterceptor_1.name);
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const { method, url, user, ip, headers } = request;
        const userAgent = headers['user-agent'] || '';
        const userId = (user === null || user === void 0 ? void 0 : user.Id_users) || 'anonymous';
        const userRole = (user === null || user === void 0 ? void 0 : user.ID_rol) || 'unknown';
        this.logger.log(`[AUDIT] ${method} ${url} - User: ${userId} (Role: ${userRole}) - IP: ${ip} - UserAgent: ${userAgent}`);
        const now = Date.now();
        return next.handle().pipe((0, operators_1.tap)({
            next: (response) => {
                const responseTime = Date.now() - now;
                if (this.isSensitiveEndpoint(url)) {
                    this.logger.warn(`[SENSITIVE_DATA_ACCESS] ${method} ${url} - User: ${userId} (Role: ${userRole}) - IP: ${ip} - Response Time: ${responseTime}ms`);
                }
            },
            error: (error) => {
                const responseTime = Date.now() - now;
                this.logger.error(`[AUDIT_ERROR] ${method} ${url} - User: ${userId} (Role: ${userRole}) - IP: ${ip} - Error: ${error.message} - Response Time: ${responseTime}ms`);
            },
        }));
    }
    isSensitiveEndpoint(url) {
        const sensitivePatterns = [
            '/pets',
            '/medical-history',
            '/appointments',
            '/bills',
        ];
        return sensitivePatterns.some(pattern => url.includes(pattern));
    }
};
exports.AuditLoggingInterceptor = AuditLoggingInterceptor;
exports.AuditLoggingInterceptor = AuditLoggingInterceptor = AuditLoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)()
], AuditLoggingInterceptor);
//# sourceMappingURL=audit-logging.interceptor.js.map