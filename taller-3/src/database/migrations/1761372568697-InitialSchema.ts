import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1761372568697 implements MigrationInterface {
    name = 'InitialSchema1761372568697'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "administrative_staff" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "identification" character varying NOT NULL, "phone" character varying, "startDate" date NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_c390b11b5c6eaeef4941104de49" UNIQUE ("userId"), CONSTRAINT "REL_c390b11b5c6eaeef4941104de4" UNIQUE ("userId"), CONSTRAINT "PK_df679065e7d92d03a55fc98cb44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pets" ("Id_pet" SERIAL NOT NULL, "name" character varying NOT NULL, "species" character varying NOT NULL, "breed" character varying NOT NULL, "sex" character varying NOT NULL, "weight" numeric(5,2) NOT NULL, "observations" character varying, "Id_client" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a5176c475890330253aba488885" PRIMARY KEY ("Id_pet"))`);
        await queryRunner.query(`CREATE TABLE "rol" ("Id_rol" SERIAL NOT NULL, "rol_nombre" character varying NOT NULL, CONSTRAINT "PK_a4b3fc1af96bfe1344cca7b3618" PRIMARY KEY ("Id_rol"))`);
        await queryRunner.query(`CREATE TABLE "client_owners" ("Id_client" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "id_rol" integer, CONSTRAINT "PK_e39cb1ade0cc35b08288c845f02" PRIMARY KEY ("Id_client"))`);
        await queryRunner.query(`CREATE TYPE "public"."product-service_type_enum" AS ENUM('PRODUCTO', 'SERVICIO')`);
        await queryRunner.query(`CREATE TABLE "product-service" ("Id_product_service" SERIAL NOT NULL, "prod_name" character varying NOT NULL, "prod_price" numeric(10,2) NOT NULL, "type" "public"."product-service_type_enum" NOT NULL, CONSTRAINT "PK_149e8b6812668cc3d12a2494ad0" PRIMARY KEY ("Id_product_service"))`);
        await queryRunner.query(`CREATE TABLE "detabill" ("Id_detabill" SERIAL NOT NULL, "det_precio" numeric(10,2) NOT NULL, "det_amount" integer NOT NULL, "Id_bill" integer NOT NULL, "Id_product_service" integer NOT NULL, CONSTRAINT "PK_63d3cb00dd819ac924706d84178" PRIMARY KEY ("Id_detabill"))`);
        await queryRunner.query(`CREATE TABLE "bill" ("Id_bill" SERIAL NOT NULL, "fac_date" date NOT NULL, "fac_total" numeric(10,2) NOT NULL, "Id_client" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7baf65ce2be3d8957b7926fbd4d" PRIMARY KEY ("Id_bill"))`);
        await queryRunner.query(`CREATE TYPE "public"."appointments_status_enum" AS ENUM('PENDIENTE', 'CONFIRMADA', 'CANCELADA', 'REALIZADA', 'NO_ASISTIO')`);
        await queryRunner.query(`CREATE TABLE "appointments" ("Id_appo" SERIAL NOT NULL, "date" date NOT NULL, "time" character varying NOT NULL, "reason" character varying NOT NULL, "value" numeric(10,2) NOT NULL, "status" "public"."appointments_status_enum" NOT NULL DEFAULT 'PENDIENTE', "detail_type" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "Id_bill" integer, "Id_pet" integer NOT NULL, "Id_users" integer NOT NULL, "Id_product_service" integer NOT NULL, CONSTRAINT "REL_d69765ba58fc0ca802ff03600d" UNIQUE ("Id_bill"), CONSTRAINT "PK_dcf9f4be02f2b5ab8d51df8e06d" PRIMARY KEY ("Id_appo"))`);
        await queryRunner.query(`CREATE TABLE "medical-history" ("Id_medicalhistory" SERIAL NOT NULL, "hist_date" date NOT NULL, "hist_time" TIME NOT NULL, "hist_diagnosys" character varying NOT NULL, "hist_treatment" character varying NOT NULL, "Id_appo" integer NOT NULL, "Id_pet" integer NOT NULL, CONSTRAINT "UQ_7e4bdb0f67eab5b10e396eb7abc" UNIQUE ("Id_pet"), CONSTRAINT "REL_7e4bdb0f67eab5b10e396eb7ab" UNIQUE ("Id_pet"), CONSTRAINT "PK_c355dca68ac90538b8a036603a1" PRIMARY KEY ("Id_medicalhistory"))`);
        await queryRunner.query(`CREATE TABLE "specialty" ("Id_specialty" SERIAL NOT NULL, "specialty_name" character varying NOT NULL, CONSTRAINT "PK_e66e594891fd8c930ef7d921aff" PRIMARY KEY ("Id_specialty"))`);
        await queryRunner.query(`CREATE TABLE "medical_staff" ("Id_users" integer NOT NULL, "identification" character varying NOT NULL, "phone" character varying NOT NULL, "Id_specialty" integer NOT NULL, CONSTRAINT "PK_a03927af08ecaf55d36a9fc4804" PRIMARY KEY ("Id_users"))`);
        await queryRunner.query(`CREATE TABLE "users" ("Id_users" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "Id_rol" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_99dac768fe2d38129907c115354" PRIMARY KEY ("Id_users"))`);
        await queryRunner.query(`CREATE TYPE "public"."product_service_type_enum" AS ENUM('PRODUCTO', 'SERVICIO')`);
        await queryRunner.query(`CREATE TABLE "product_service" ("id_product_service" SERIAL NOT NULL, "name" character varying NOT NULL, "price" numeric(10,2) NOT NULL, "type" "public"."product_service_type_enum" NOT NULL, CONSTRAINT "PK_1e67c7465a9e3bb527bd0a69cdd" PRIMARY KEY ("id_product_service"))`);
        await queryRunner.query(`CREATE TABLE "usuario_historial" ("Id_medicalhistory" integer NOT NULL, "Id_users" integer NOT NULL, CONSTRAINT "PK_83a46a58971a0533f8276a94690" PRIMARY KEY ("Id_medicalhistory", "Id_users"))`);
        await queryRunner.query(`CREATE INDEX "IDX_49041f0e7e1b3bbb75e9cd2067" ON "usuario_historial" ("Id_medicalhistory") `);
        await queryRunner.query(`CREATE INDEX "IDX_ea176f8e37ae237d78653767ec" ON "usuario_historial" ("Id_users") `);
        await queryRunner.query(`ALTER TABLE "administrative_staff" ADD CONSTRAINT "FK_c390b11b5c6eaeef4941104de49" FOREIGN KEY ("userId") REFERENCES "users"("Id_users") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_be9608ad5061d748b9b23ea468f" FOREIGN KEY ("Id_client") REFERENCES "client_owners"("Id_client") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "client_owners" ADD CONSTRAINT "FK_eebd23ad8d897441f92aee84426" FOREIGN KEY ("id_rol") REFERENCES "rol"("Id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detabill" ADD CONSTRAINT "FK_d11008213867f0861989c3acd43" FOREIGN KEY ("Id_bill") REFERENCES "bill"("Id_bill") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "detabill" ADD CONSTRAINT "FK_69fd500de0173e4fc5190939d6f" FOREIGN KEY ("Id_product_service") REFERENCES "product-service"("Id_product_service") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bill" ADD CONSTRAINT "FK_16a88f480f5c471a794d2042dd4" FOREIGN KEY ("Id_client") REFERENCES "client_owners"("Id_client") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_d69765ba58fc0ca802ff03600d3" FOREIGN KEY ("Id_bill") REFERENCES "bill"("Id_bill") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_3f0876e05ef45577c1a23c37d85" FOREIGN KEY ("Id_pet") REFERENCES "pets"("Id_pet") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_43ce2ba6977d0102800d5f61e34" FOREIGN KEY ("Id_users") REFERENCES "users"("Id_users") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointments" ADD CONSTRAINT "FK_d42a2567e760d6024183fef5456" FOREIGN KEY ("Id_product_service") REFERENCES "product-service"("Id_product_service") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical-history" ADD CONSTRAINT "FK_f48384d4fa52b999615f792f149" FOREIGN KEY ("Id_appo") REFERENCES "appointments"("Id_appo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical-history" ADD CONSTRAINT "FK_7e4bdb0f67eab5b10e396eb7abc" FOREIGN KEY ("Id_pet") REFERENCES "pets"("Id_pet") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_staff" ADD CONSTRAINT "FK_a03927af08ecaf55d36a9fc4804" FOREIGN KEY ("Id_users") REFERENCES "users"("Id_users") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "medical_staff" ADD CONSTRAINT "FK_51531ebe922def56d0aedbbbc44" FOREIGN KEY ("Id_specialty") REFERENCES "specialty"("Id_specialty") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_dbcd416e877de0434b84695dfc4" FOREIGN KEY ("Id_rol") REFERENCES "rol"("Id_rol") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "usuario_historial" ADD CONSTRAINT "FK_49041f0e7e1b3bbb75e9cd2067e" FOREIGN KEY ("Id_medicalhistory") REFERENCES "medical-history"("Id_medicalhistory") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "usuario_historial" ADD CONSTRAINT "FK_ea176f8e37ae237d78653767ec9" FOREIGN KEY ("Id_users") REFERENCES "users"("Id_users") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuario_historial" DROP CONSTRAINT "FK_ea176f8e37ae237d78653767ec9"`);
        await queryRunner.query(`ALTER TABLE "usuario_historial" DROP CONSTRAINT "FK_49041f0e7e1b3bbb75e9cd2067e"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_dbcd416e877de0434b84695dfc4"`);
        await queryRunner.query(`ALTER TABLE "medical_staff" DROP CONSTRAINT "FK_51531ebe922def56d0aedbbbc44"`);
        await queryRunner.query(`ALTER TABLE "medical_staff" DROP CONSTRAINT "FK_a03927af08ecaf55d36a9fc4804"`);
        await queryRunner.query(`ALTER TABLE "medical-history" DROP CONSTRAINT "FK_7e4bdb0f67eab5b10e396eb7abc"`);
        await queryRunner.query(`ALTER TABLE "medical-history" DROP CONSTRAINT "FK_f48384d4fa52b999615f792f149"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_d42a2567e760d6024183fef5456"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_43ce2ba6977d0102800d5f61e34"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_3f0876e05ef45577c1a23c37d85"`);
        await queryRunner.query(`ALTER TABLE "appointments" DROP CONSTRAINT "FK_d69765ba58fc0ca802ff03600d3"`);
        await queryRunner.query(`ALTER TABLE "bill" DROP CONSTRAINT "FK_16a88f480f5c471a794d2042dd4"`);
        await queryRunner.query(`ALTER TABLE "detabill" DROP CONSTRAINT "FK_69fd500de0173e4fc5190939d6f"`);
        await queryRunner.query(`ALTER TABLE "detabill" DROP CONSTRAINT "FK_d11008213867f0861989c3acd43"`);
        await queryRunner.query(`ALTER TABLE "client_owners" DROP CONSTRAINT "FK_eebd23ad8d897441f92aee84426"`);
        await queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_be9608ad5061d748b9b23ea468f"`);
        await queryRunner.query(`ALTER TABLE "administrative_staff" DROP CONSTRAINT "FK_c390b11b5c6eaeef4941104de49"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ea176f8e37ae237d78653767ec"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49041f0e7e1b3bbb75e9cd2067"`);
        await queryRunner.query(`DROP TABLE "usuario_historial"`);
        await queryRunner.query(`DROP TABLE "product_service"`);
        await queryRunner.query(`DROP TYPE "public"."product_service_type_enum"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "medical_staff"`);
        await queryRunner.query(`DROP TABLE "specialty"`);
        await queryRunner.query(`DROP TABLE "medical-history"`);
        await queryRunner.query(`DROP TABLE "appointments"`);
        await queryRunner.query(`DROP TYPE "public"."appointments_status_enum"`);
        await queryRunner.query(`DROP TABLE "bill"`);
        await queryRunner.query(`DROP TABLE "detabill"`);
        await queryRunner.query(`DROP TABLE "product-service"`);
        await queryRunner.query(`DROP TYPE "public"."product-service_type_enum"`);
        await queryRunner.query(`DROP TABLE "client_owners"`);
        await queryRunner.query(`DROP TABLE "rol"`);
        await queryRunner.query(`DROP TABLE "pets"`);
        await queryRunner.query(`DROP TABLE "administrative_staff"`);
    }

}
