import { MigrationInterface, QueryRunner } from 'typeorm';

export class addNullableISCFields1586282095107 implements MigrationInterface {
  name = 'addNullableISCFields1586282095107';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "temporary_details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean NOT NULL DEFAULT (0), "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL DEFAULT (0), "ava" text NOT NULL, "name" varchar NOT NULL, "s" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s" FROM "details"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_details" RENAME TO "details"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "UQ_ee3cc89ae850a57f77dc10fd069" UNIQUE ("primaryUnitId"), CONSTRAINT "FK_ee3cc89ae850a57f77dc10fd069" FOREIGN KEY ("primaryUnitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_entry"("id", "isc", "name", "sectorials", "primaryUnitId") SELECT "id", "isc", "name", "sectorials", "primaryUnitId" FROM "entry"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "entry"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_entry" RENAME TO "entry"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean NOT NULL DEFAULT (0), "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL DEFAULT (0), "ava" text NOT NULL, "name" varchar NOT NULL, "s" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s" FROM "details"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_details" RENAME TO "details"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "UQ_ee3cc89ae850a57f77dc10fd069" UNIQUE ("primaryUnitId"), CONSTRAINT "FK_ee3cc89ae850a57f77dc10fd069" FOREIGN KEY ("primaryUnitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_entry"("id", "isc", "name", "sectorials", "primaryUnitId") SELECT "id", "isc", "name", "sectorials", "primaryUnitId" FROM "entry"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "entry"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_entry" RENAME TO "entry"`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "entry" RENAME TO "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "UQ_ee3cc89ae850a57f77dc10fd069" UNIQUE ("primaryUnitId"), CONSTRAINT "FK_ee3cc89ae850a57f77dc10fd069" FOREIGN KEY ("primaryUnitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "entry"("id", "isc", "name", "sectorials", "primaryUnitId") SELECT "id", "isc", "name", "sectorials", "primaryUnitId" FROM "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_entry"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "details" RENAME TO "temporary_details"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean NOT NULL DEFAULT (0), "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL DEFAULT (0), "ava" text NOT NULL, "name" varchar NOT NULL, "s" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s" FROM "temporary_details"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_details"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "entry" RENAME TO "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "UQ_ee3cc89ae850a57f77dc10fd069" UNIQUE ("primaryUnitId"), CONSTRAINT "FK_ee3cc89ae850a57f77dc10fd069" FOREIGN KEY ("primaryUnitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "entry"("id", "isc", "name", "sectorials", "primaryUnitId") SELECT "id", "isc", "name", "sectorials", "primaryUnitId" FROM "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_entry"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "details" RENAME TO "temporary_details"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean NOT NULL DEFAULT (0), "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL DEFAULT (0), "ava" text NOT NULL, "name" varchar NOT NULL, "s" varchar NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name", "s" FROM "temporary_details"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_details"`, undefined);
  }
}
