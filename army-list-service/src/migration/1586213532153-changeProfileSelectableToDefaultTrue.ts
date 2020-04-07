import {MigrationInterface, QueryRunner} from "typeorm";

export class changeProfileSelectableToDefaultTrue1586213532153 implements MigrationInterface {
    name = 'changeProfileSelectableToDefaultTrue1586213532153'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_unit" ("id" varchar PRIMARY KEY NOT NULL, "isProfilesSelectable" boolean NOT NULL DEFAULT (1), "notes" text NOT NULL, "primaryDetailsId" varchar, "secondaryDetailsId" varchar, CONSTRAINT "UQ_c433e3185ac659eff4003063ca7" UNIQUE ("secondaryDetailsId"), CONSTRAINT "UQ_f5154dc9fcd7dd967bda1daead7" UNIQUE ("primaryDetailsId"), CONSTRAINT "FK_c433e3185ac659eff4003063ca7" FOREIGN KEY ("secondaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f5154dc9fcd7dd967bda1daead7" FOREIGN KEY ("primaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_unit"("id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId") SELECT "id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId" FROM "unit"`, undefined);
        await queryRunner.query(`DROP TABLE "unit"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_unit" RENAME TO "unit"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "unit" RENAME TO "temporary_unit"`, undefined);
        await queryRunner.query(`CREATE TABLE "unit" ("id" varchar PRIMARY KEY NOT NULL, "isProfilesSelectable" boolean NOT NULL, "notes" text NOT NULL, "primaryDetailsId" varchar, "secondaryDetailsId" varchar, CONSTRAINT "UQ_c433e3185ac659eff4003063ca7" UNIQUE ("secondaryDetailsId"), CONSTRAINT "UQ_f5154dc9fcd7dd967bda1daead7" UNIQUE ("primaryDetailsId"), CONSTRAINT "FK_c433e3185ac659eff4003063ca7" FOREIGN KEY ("secondaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_f5154dc9fcd7dd967bda1daead7" FOREIGN KEY ("primaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "unit"("id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId") SELECT "id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId" FROM "temporary_unit"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_unit"`, undefined);
    }

}
