import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";


export class AddTipoDetalleColumn17xxxx implements MigrationInterface {
    name = 'AddTipoDetalleColumn17xxxx'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('appointments', new TableColumn({
            name: 'detail_type', 
            type: 'varchar',
            length: '255',
            isNullable: true, 
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropColumn('appointments', 'detail_type');
    }
}