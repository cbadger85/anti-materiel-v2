import { MigrationInterface, QueryRunner } from 'typeorm';

export class addWeaponsRelationToWeaponMode1586106981553
  implements MigrationInterface {
  name = 'addWeaponsRelationToWeaponMode1586106981553';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "weapon_range_band" ("id" varchar PRIMARY KEY NOT NULL, "min" varchar NOT NULL, "max" varchar NOT NULL, "modifier" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "weapon_range" ("id" varchar PRIMARY KEY NOT NULL, "shortId" varchar, "mediumId" varchar, "longId" varchar, "maximumId" varchar, CONSTRAINT "REL_d48f689630b096b4fe303df7b1" UNIQUE ("shortId"), CONSTRAINT "REL_cdffbd56ef495c7e0722e6cd31" UNIQUE ("mediumId"), CONSTRAINT "REL_b77676ffff9fd29cdebff50d0f" UNIQUE ("longId"), CONSTRAINT "REL_a5ba66ebcf11c80f1a709e423e" UNIQUE ("maximumId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "REL_72db4c5e2e80661e9fda3b0385" UNIQUE ("weaponRangeId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "weapon" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_weapon_range" ("id" varchar PRIMARY KEY NOT NULL, "shortId" varchar, "mediumId" varchar, "longId" varchar, "maximumId" varchar, CONSTRAINT "REL_d48f689630b096b4fe303df7b1" UNIQUE ("shortId"), CONSTRAINT "REL_cdffbd56ef495c7e0722e6cd31" UNIQUE ("mediumId"), CONSTRAINT "REL_b77676ffff9fd29cdebff50d0f" UNIQUE ("longId"), CONSTRAINT "REL_a5ba66ebcf11c80f1a709e423e" UNIQUE ("maximumId"), CONSTRAINT "FK_d48f689630b096b4fe303df7b1b" FOREIGN KEY ("shortId") REFERENCES "weapon_range_band" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_cdffbd56ef495c7e0722e6cd31c" FOREIGN KEY ("mediumId") REFERENCES "weapon_range_band" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_b77676ffff9fd29cdebff50d0fb" FOREIGN KEY ("longId") REFERENCES "weapon_range_band" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a5ba66ebcf11c80f1a709e423e4" FOREIGN KEY ("maximumId") REFERENCES "weapon_range_band" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_weapon_range"("id", "shortId", "mediumId", "longId", "maximumId") SELECT "id", "shortId", "mediumId", "longId", "maximumId" FROM "weapon_range"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "weapon_range"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_weapon_range" RENAME TO "weapon_range"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "REL_72db4c5e2e80661e9fda3b0385" UNIQUE ("weaponRangeId"), CONSTRAINT "FK_72db4c5e2e80661e9fda3b0385f" FOREIGN KEY ("weaponRangeId") REFERENCES "weapon_range" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_e1fe165610a339b10bac256163b" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_weapon_mode"("id", "name", "damage", "burst", "weaponRangeId", "weaponId") SELECT "id", "name", "damage", "burst", "weaponRangeId", "weaponId" FROM "weapon_mode"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "weapon_mode"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_weapon_mode" RENAME TO "weapon_mode"`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "weapon_mode" RENAME TO "temporary_weapon_mode"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "weapon_mode" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "weaponRangeId" varchar, "weaponId" varchar, CONSTRAINT "REL_72db4c5e2e80661e9fda3b0385" UNIQUE ("weaponRangeId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "weapon_mode"("id", "name", "damage", "burst", "weaponRangeId", "weaponId") SELECT "id", "name", "damage", "burst", "weaponRangeId", "weaponId" FROM "temporary_weapon_mode"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_weapon_mode"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "weapon_range" RENAME TO "temporary_weapon_range"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "weapon_range" ("id" varchar PRIMARY KEY NOT NULL, "shortId" varchar, "mediumId" varchar, "longId" varchar, "maximumId" varchar, CONSTRAINT "REL_d48f689630b096b4fe303df7b1" UNIQUE ("shortId"), CONSTRAINT "REL_cdffbd56ef495c7e0722e6cd31" UNIQUE ("mediumId"), CONSTRAINT "REL_b77676ffff9fd29cdebff50d0f" UNIQUE ("longId"), CONSTRAINT "REL_a5ba66ebcf11c80f1a709e423e" UNIQUE ("maximumId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "weapon_range"("id", "shortId", "mediumId", "longId", "maximumId") SELECT "id", "shortId", "mediumId", "longId", "maximumId" FROM "temporary_weapon_range"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_weapon_range"`, undefined);
    await queryRunner.query(`DROP TABLE "weapon"`, undefined);
    await queryRunner.query(`DROP TABLE "weapon_mode"`, undefined);
    await queryRunner.query(`DROP TABLE "weapon_range"`, undefined);
    await queryRunner.query(`DROP TABLE "weapon_range_band"`, undefined);
  }
}
