import {MigrationInterface, QueryRunner} from "typeorm";

export class dropWeaponRangeTable1586109840389 implements MigrationInterface {
    name = 'dropWeaponRangeTable1586109840389'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier", "typeId") SELECT "id", "min", "max", "modifier", "typeId" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "type" varchar NOT NULL, "weaponModeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "type" varchar NOT NULL, "weaponModeId" varchar, CONSTRAINT "FK_dbe7ccbbaf4c587666b9d32f029" FOREIGN KEY ("weaponModeId") REFERENCES "weapon_mode" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier", "type", "weaponModeId") SELECT "id", "min", "max", "modifier", "type", "weaponModeId" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "type" varchar NOT NULL, "weaponModeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier", "type", "weaponModeId") SELECT "id", "min", "max", "modifier", "type", "weaponModeId" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar, CONSTRAINT "FK_0ed4e22dc47ab8416fef2952757" FOREIGN KEY ("typeId") REFERENCES "weapon_mode" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier", "typeId") SELECT "id", "min", "max", "modifier", "typeId" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
    }

}
