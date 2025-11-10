import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDetailTypeColumn1761288021565 implements MigrationInterface {
    name = 'AddDetailTypeColumn1761288021565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "detail_type" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "detail_type"`);
    }

}
