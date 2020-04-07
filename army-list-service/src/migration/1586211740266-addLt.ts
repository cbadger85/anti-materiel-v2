import {MigrationInterface, QueryRunner} from "typeorm";

export class addLt1586211740266 implements MigrationInterface {
    name = 'addLt1586211740266'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL DEFAULT (0), "unitId" varchar, CONSTRAINT "FK_9b519d21289b92f7b51bd09517f" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "profile"`, undefined);
        await queryRunner.query(`DROP TABLE "profile"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_profile" RENAME TO "profile"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "profile" RENAME TO "temporary_profile"`, undefined);
        await queryRunner.query(`CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, "isLieutenant" boolean NOT NULL, "unitId" varchar, CONSTRAINT "FK_9b519d21289b92f7b51bd09517f" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId", "isLieutenant", "unitId" FROM "temporary_profile"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
    }

}
