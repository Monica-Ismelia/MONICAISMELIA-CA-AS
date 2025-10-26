"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secrearelacionentreappointmentyproductservice1761286221129 = void 0;
class Secrearelacionentreappointmentyproductservice1761286221129 {
    constructor() {
        this.name = 'Secrearelacionentreappointmentyproductservice1761286221129';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "tipo_detalle" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "tipo_detalle"`);
    }
}
exports.Secrearelacionentreappointmentyproductservice1761286221129 = Secrearelacionentreappointmentyproductservice1761286221129;
//# sourceMappingURL=1761286221129-Secrearelacionentreappointmentyproductservice.js.map