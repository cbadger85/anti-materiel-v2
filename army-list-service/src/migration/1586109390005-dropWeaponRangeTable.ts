import { MigrationInterface, QueryRunner } from 'typeorm';

export class dropWeaponRangeTable1586109390005 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "weapon_range"`, undefined);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "weapon_range" ("id" varchar PRIMARY KEY NOT NULL, "shortId" varchar, "mediumId" varchar, "longId" varchar, "maximumId" varchar, CONSTRAINT "REL_d48f689630b096b4fe303df7b1" UNIQUE ("shortId"), CONSTRAINT "REL_cdffbd56ef495c7e0722e6cd31" UNIQUE ("mediumId"), CONSTRAINT "REL_b77676ffff9fd29cdebff50d0f" UNIQUE ("longId"), CONSTRAINT "REL_a5ba66ebcf11c80f1a709e423e" UNIQUE ("maximumId"))`,
      undefined,
    );
  }
}
