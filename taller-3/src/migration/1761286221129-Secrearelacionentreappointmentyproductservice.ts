import { MigrationInterface, QueryRunner } from "typeorm";

export class Secrearelacionentreappointmentyproductservice1761286221129 implements MigrationInterface {
    name = 'Secrearelacionentreappointmentyproductservice1761286221129'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "tipo_detalle" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "tipo_detalle"`);
    }

}
