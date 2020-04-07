import {MigrationInterface, QueryRunner} from "typeorm";

export class changeHackableToDefaultFalse1586212429059 implements MigrationInterface {
    name = 'changeHackableToDefaultFalse1586212429059'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean, "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL, "ava" text NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name" FROM "details"`, undefined);
        await queryRunner.query(`DROP TABLE "details"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_details" RENAME TO "details"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean NOT NULL DEFAULT (0), "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL, "ava" text NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name" FROM "details"`, undefined);
        await queryRunner.query(`DROP TABLE "details"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_details" RENAME TO "details"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "details" RENAME TO "temporary_details"`, undefined);
        await queryRunner.query(`CREATE TABLE "details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean, "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL, "ava" text NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name" FROM "temporary_details"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_details"`, undefined);
        await queryRunner.query(`ALTER TABLE "details" RENAME TO "temporary_details"`, undefined);
        await queryRunner.query(`CREATE TABLE "details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean, "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL, "ava" text NOT NULL, "name" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "details"("id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name") SELECT "id", "isc", "classification", "unitType", "orderType", "hackable", "impetuous", "cube", "mov", "cc", "bs", "ph", "wip", "arm", "bts", "w", "structure", "ava", "name" FROM "temporary_details"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_details"`, undefined);
    }

}
