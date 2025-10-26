"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTipoDetalleColumn17xxxx = void 0;
const typeorm_1 = require("typeorm");
class AddTipoDetalleColumn17xxxx {
    constructor() {
        this.name = 'AddTipoDetalleColumn17xxxx';
    }
    async up(queryRunner) {
        await queryRunner.addColumn('appointments', new typeorm_1.TableColumn({
            name: 'detail_type',
            type: 'varchar',
            length: '255',
            isNullable: true,
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropColumn('appointments', 'detail_type');
    }
}
exports.AddTipoDetalleColumn17xxxx = AddTipoDetalleColumn17xxxx;
//# sourceMappingURL=1761007727609-NewEntities.js.map