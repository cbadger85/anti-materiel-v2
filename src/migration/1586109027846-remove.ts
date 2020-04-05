import {MigrationInterface, QueryRunner} from "typeorm";

export class remove1586109027846 implements MigrationInterface {
    name = 'remove1586109027846'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "UQ_72db4c5e2e80661e9fda3b0385f" UNIQUE ("weaponRangeId"), CONSTRAINT "FK_e1fe165610a339b10bac256163b" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_mode"("id", "name", "damage", "burst", "weaponRangeId", "weaponId") SELECT "id", "name", "damage", "burst", "weaponRangeId", "weaponId" FROM "weapon_mode"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_mode" RENAME TO "weapon_mode"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponId" varchar, CONSTRAINT "FK_e1fe165610a339b10bac256163b" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_mode"("id", "name", "damage", "burst", "weaponId") SELECT "id", "name", "damage", "burst", "weaponId" FROM "weapon_mode"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_mode" RENAME TO "weapon_mode"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar, CONSTRAINT "FK_0ed4e22dc47ab8416fef2952757" FOREIGN KEY ("typeId") REFERENCES "weapon_mode" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_range_band"("id", "min", "max", "modifier", "typeId") SELECT "id", "min", "max", "modifier", "typeId" FROM "weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_range_band" RENAME TO "weapon_range_band"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL, "typeId" varchar)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier", "typeId") SELECT "id", "min", "max", "modifier", "typeId" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_range_band" RENAME TO "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_range_band"("id", "min", "max", "modifier") SELECT "id", "min", "max", "modifier" FROM "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_range_band"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_mode" RENAME TO "temporary_weapon_mode"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "UQ_72db4c5e2e80661e9fda3b0385f" UNIQUE ("weaponRangeId"), CONSTRAINT "FK_e1fe165610a339b10bac256163b" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_mode"("id", "name", "damage", "burst", "weaponId") SELECT "id", "name", "damage", "burst", "weaponId" FROM "temporary_weapon_mode"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_mode"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_mode" RENAME TO "temporary_weapon_mode"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "UQ_72db4c5e2e80661e9fda3b0385f" UNIQUE ("weaponRangeId"), CONSTRAINT "FK_e1fe165610a339b10bac256163b" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_72db4c5e2e80661e9fda3b0385f" FOREIGN KEY ("weaponRangeId") REFERENCES "weapon_range" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_mode"("id", "name", "damage", "burst", "weaponRangeId", "weaponId") SELECT "id", "name", "damage", "burst", "weaponRangeId", "weaponId" FROM "temporary_weapon_mode"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_mode"`, undefined);
    }

}
