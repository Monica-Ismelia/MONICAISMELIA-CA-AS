"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Secrearelacionentreappointmentyproductservice1761286558095 = void 0;
class Secrearelacionentreappointmentyproductservice1761286558095 {
    constructor() {
        this.name = 'Secrearelacionentreappointmentyproductservice1761286558095';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "detail_type" character varying(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "detail_type"`);
    }
}
exports.Secrearelacionentreappointmentyproductservice1761286558095 = Secrearelacionentreappointmentyproductservice1761286558095;
//# sourceMappingURL=1761286558095-Secrearelacionentreappointmentyproductservice.js.map