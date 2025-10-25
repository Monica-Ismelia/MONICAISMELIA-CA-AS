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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcryptjs");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    async validateUser(email, password) {
        try {
            const user = await this.userService.findByEmail(email);
            if (user && await bcrypt.compare(password, user.password)) {
                const { password } = user, result = __rest(user, ["password"]);
                this.logger.log(`Usuario ${email} autenticado exitosamente`);
                return result;
            }
            this.logger.warn(`Intento de login fallido para email: ${email}`);
            return null;
        }
        catch (error) {
            this.logger.error(`Error validando usuario ${email}:`, error);
            return null;
        }
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto.email, loginDto.password);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = {
            email: user.email,
            sub: user.Id_users,
            role: user.ID_rol,
            firstName: user.firstName,
            lastName: user.lastName
        };
        this.logger.log(`Login exitoso para usuario: ${user.email}`);
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.Id_users,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.ID_rol
            }
        };
    }
    async register(registerDto) {
        try {
            const existingUser = await this.userService.findByEmail(registerDto.email);
            if (existingUser) {
                throw new common_1.ConflictException('El email ya está registrado');
            }
            const saltRounds = 12;
            const hashedPassword = await bcrypt.hash(registerDto.password, saltRounds);
            const userData = Object.assign(Object.assign({}, registerDto), { password: hashedPassword });
            const newUser = await this.userService.create(userData);
            const { password } = newUser, result = __rest(newUser, ["password"]);
            this.logger.log(`Usuario registrado exitosamente: ${registerDto.email}`);
            return {
                message: 'Usuario registrado exitosamente',
                user: result
            };
        }
        catch (error) {
            this.logger.error(`Error registrando usuario ${registerDto.email}:`, error);
            throw error;
        }
    }
    async refreshToken(user) {
        const payload = {
            email: user.email,
            sub: user.Id_users,
            role: user.ID_rol,
            firstName: user.firstName,
            lastName: user.lastName
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map