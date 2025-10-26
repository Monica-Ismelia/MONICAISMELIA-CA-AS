"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDetailTypeColumn1761288021565 = void 0;
class AddDetailTypeColumn1761288021565 {
    constructor() {
        this.name = 'AddDetailTypeColumn1761288021565';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "detail_type" character varying(255) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "detail_type"`);
    }
}
exports.AddDetailTypeColumn1761288021565 = AddDetailTypeColumn1761288021565;
//# sourceMappingURL=1761288021565-AddDetailTypeColumn.js.map