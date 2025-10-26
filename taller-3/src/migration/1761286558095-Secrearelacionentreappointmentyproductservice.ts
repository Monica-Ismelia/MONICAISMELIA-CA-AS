import { MigrationInterface, QueryRunner } from "typeorm";

export class Secrearelacionentreappointmentyproductservice1761286558095 implements MigrationInterface {
    name = 'Secrearelacionentreappointmentyproductservice1761286558095'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" ADD "detail_type" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointments" DROP COLUMN "detail_type"`);
    }

}
