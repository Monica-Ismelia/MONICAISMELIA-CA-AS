import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddTipoDetalleColumn17xxxx implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
