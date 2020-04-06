import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyProfileEntity1586210439648 implements MigrationInterface {
    name = 'modifyProfileEntity1586210439648'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile_added_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9ad2000c3cc4c6f52f9dea963b" ON "profile_added_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bdd0db3d88c9fe132bdaff273a" ON "profile_added_profiles_profile" ("profileId_2") `, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL, "unitId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL, "unitId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9b519d21289b92f7b51bd09517f" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9ad2000c3cc4c6f52f9dea963b"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_bdd0db3d88c9fe132bdaff273a"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_profile_added_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, CONSTRAINT "FK_9ad2000c3cc4c6f52f9dea963b6" FOREIGN KEY ("profileId_1") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bdd0db3d88c9fe132bdaff273a3" FOREIGN KEY ("profileId_2") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile_added_profiles_profile"("profileId_1", "profileId_2") SELECT "profileId_1", "profileId_2" FROM "profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile_added_profiles_profile" RENAME TO "profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9ad2000c3cc4c6f52f9dea963b" ON "profile_added_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bdd0db3d88c9fe132bdaff273a" ON "profile_added_profiles_profile" ("profileId_2") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_bdd0db3d88c9fe132bdaff273a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9ad2000c3cc4c6f52f9dea963b"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile_added_profiles_profile" RENAME TO "temporary_profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile_added_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "profile_added_profiles_profile"("profileId_1", "profileId_2") SELECT "profileId_1", "profileId_2" FROM "temporary_profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_bdd0db3d88c9fe132bdaff273a" ON "profile_added_profiles_profile" ("profileId_2") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9ad2000c3cc4c6f52f9dea963b" ON "profile_added_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL, "unitId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "temporary_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "temporary_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_bdd0db3d88c9fe132bdaff273a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9ad2000c3cc4c6f52f9dea963b"`, undefined);
        await queryRunner.query(`DROP TABLE "profile_added_profiles_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_6f49b0226f62faf24ff4faacb6b" FOREIGN KEY ("unitsId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "temporary_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
    }

}
