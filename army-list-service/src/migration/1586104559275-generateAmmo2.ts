import {MigrationInterface, QueryRunner} from "typeorm";

export class generateAmmo21586104559275 implements MigrationInterface {
    name = 'generateAmmo21586104559275'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "REL_2baa48439c33d874de7b7a1bf9" UNIQUE ("combinedAmmoId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "REL_2baa48439c33d874de7b7a1bf9" UNIQUE ("combinedAmmoId"), CONSTRAINT "FK_2baa48439c33d874de7b7a1bf9c" FOREIGN KEY ("combinedAmmoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_ammo"("id", "link", "name", "combinedAmmoId") SELECT "id", "link", "name", "combinedAmmoId" FROM "ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_ammo" RENAME TO "ammo"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "ammo" RENAME TO "temporary_ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "ammo" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "combinedAmmoId" varchar, CONSTRAINT "REL_2baa48439c33d874de7b7a1bf9" UNIQUE ("combinedAmmoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "ammo"("id", "link", "name", "combinedAmmoId") SELECT "id", "link", "name", "combinedAmmoId" FROM "temporary_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "ammo"`, undefined);
    }

}
