import {MigrationInterface, QueryRunner} from "typeorm";

export class changeCombinedAmmoToListOfAmmo1586124347179 implements MigrationInterface {
    name = 'changeCombinedAmmoToListOfAmmo1586124347179'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "UQ_2baa48439c33d874de7b7a1bf9c" UNIQUE ("combinedAmmoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_ammo"("id", "link", "name", "combinedAmmoId") SELECT "id", "link", "name", "combinedAmmoId" FROM "ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_ammo" RENAME TO "ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "ammo_combined_ammo_ammo" ("ammoId_1" varchar NOT NULL, "ammoId_2" varchar NOT NULL, PRIMARY KEY ("ammoId_1", "ammoId_2"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_05db156ae0251f177445c869fa" ON "ammo_combined_ammo_ammo" ("ammoId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_488f72c2615c41ff985c577e45" ON "ammo_combined_ammo_ammo" ("ammoId_2") `, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_ammo"("id", "link", "name") SELECT "id", "link", "name" FROM "ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_ammo" RENAME TO "ammo"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_05db156ae0251f177445c869fa"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_488f72c2615c41ff985c577e45"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_ammo_combined_ammo_ammo" ("ammoId_1" varchar NOT NULL, "ammoId_2" varchar NOT NULL, CONSTRAINT "FK_05db156ae0251f177445c869fad" FOREIGN KEY ("ammoId_1") REFERENCES "ammo" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_488f72c2615c41ff985c577e451" FOREIGN KEY ("ammoId_2") REFERENCES "ammo" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("ammoId_1", "ammoId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_ammo_combined_ammo_ammo"("ammoId_1", "ammoId_2") SELECT "ammoId_1", "ammoId_2" FROM "ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_ammo_combined_ammo_ammo" RENAME TO "ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_05db156ae0251f177445c869fa" ON "ammo_combined_ammo_ammo" ("ammoId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_488f72c2615c41ff985c577e45" ON "ammo_combined_ammo_ammo" ("ammoId_2") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_488f72c2615c41ff985c577e45"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_05db156ae0251f177445c869fa"`, undefined);
        await queryRunner.query(`ALTER TABLE "ammo_combined_ammo_ammo" RENAME TO "temporary_ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "ammo_combined_ammo_ammo" ("ammoId_1" varchar NOT NULL, "ammoId_2" varchar NOT NULL, PRIMARY KEY ("ammoId_1", "ammoId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "ammo_combined_ammo_ammo"("ammoId_1", "ammoId_2") SELECT "ammoId_1", "ammoId_2" FROM "temporary_ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_488f72c2615c41ff985c577e45" ON "ammo_combined_ammo_ammo" ("ammoId_2") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_05db156ae0251f177445c869fa" ON "ammo_combined_ammo_ammo" ("ammoId_1") `, undefined);
        await queryRunner.query(`ALTER TABLE "ammo" RENAME TO "temporary_ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "UQ_2baa48439c33d874de7b7a1bf9c" UNIQUE ("combinedAmmoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "ammo"("id", "link", "name") SELECT "id", "link", "name" FROM "temporary_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_ammo"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_488f72c2615c41ff985c577e45"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_05db156ae0251f177445c869fa"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo_combined_ammo_ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "ammo" RENAME TO "temporary_ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "UQ_2baa48439c33d874de7b7a1bf9c" UNIQUE ("combinedAmmoId"), CONSTRAINT "FK_2baa48439c33d874de7b7a1bf9c" FOREIGN KEY ("combinedAmmoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "ammo"("id", "link", "name", "combinedAmmoId") SELECT "id", "link", "name", "combinedAmmoId" FROM "temporary_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_ammo"`, undefined);
    }

}
