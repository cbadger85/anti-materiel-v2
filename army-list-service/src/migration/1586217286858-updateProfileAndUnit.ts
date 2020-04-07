import {MigrationInterface, QueryRunner} from "typeorm";

export class updateProfileAndUnit1586217286858 implements MigrationInterface {
    name = 'updateProfileAndUnit1586217286858'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorials" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL DEFAULT (0), "unitId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9b519d21289b92f7b51bd09517f" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorials", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile_adds_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_67e597b15c0269f5edfddc500f" ON "profile_adds_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_af4903a5748abaad5e04a24e4a" ON "profile_adds_profiles_profile" ("profileId_2") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_67e597b15c0269f5edfddc500f"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_af4903a5748abaad5e04a24e4a"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_profile_adds_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, CONSTRAINT "FK_67e597b15c0269f5edfddc500f7" FOREIGN KEY ("profileId_1") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_af4903a5748abaad5e04a24e4a5" FOREIGN KEY ("profileId_2") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile_adds_profiles_profile"("profileId_1", "profileId_2") SELECT "profileId_1", "profileId_2" FROM "profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile_adds_profiles_profile" RENAME TO "profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_67e597b15c0269f5edfddc500f" ON "profile_adds_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_af4903a5748abaad5e04a24e4a" ON "profile_adds_profiles_profile" ("profileId_2") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_af4903a5748abaad5e04a24e4a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_67e597b15c0269f5edfddc500f"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile_adds_profiles_profile" RENAME TO "temporary_profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile_adds_profiles_profile" ("profileId_1" varchar NOT NULL, "profileId_2" varchar NOT NULL, PRIMARY KEY ("profileId_1", "profileId_2"))`, undefined);
        await queryRunner.query(`INSERT INTO "profile_adds_profiles_profile"("profileId_1", "profileId_2") SELECT "profileId_1", "profileId_2" FROM "temporary_profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_af4903a5748abaad5e04a24e4a" ON "profile_adds_profiles_profile" ("profileId_2") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_67e597b15c0269f5edfddc500f" ON "profile_adds_profiles_profile" ("profileId_1") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_af4903a5748abaad5e04a24e4a"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_67e597b15c0269f5edfddc500f"`, undefined);
        await queryRunner.query(`DROP TABLE "profile_adds_profiles_profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL DEFAULT (0), "unitId" varchar, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_9b519d21289b92f7b51bd09517f" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorials", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "temporary_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
    }

}
