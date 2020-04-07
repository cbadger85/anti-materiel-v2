import {MigrationInterface, QueryRunner} from "typeorm";

export class addRangeToInfoWarAttack1586223399075 implements MigrationInterface {
    name = 'addRangeToInfoWarAttack1586223399075'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "temporary_info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" text NOT NULL, "skillType" text NOT NULL, "special" varchar, "opponentModifier" varchar NOT NULL, "range" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "damage", "burst", "target", "skillType", "special", "opponentModifier") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "damage", "burst", "target", "skillType", "special", "opponentModifier" FROM "info_war_attack"`, undefined);
        await queryRunner.query(`DROP TABLE "info_war_attack"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_info_war_attack" RENAME TO "info_war_attack"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "info_war_attack" RENAME TO "temporary_info_war_attack"`, undefined);
        await queryRunner.query(`CREATE TABLE "info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" text NOT NULL, "skillType" text NOT NULL, "special" varchar, "opponentModifier" varchar NOT NULL)`, undefined);
        await queryRunner.query(`INSERT INTO "info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "damage", "burst", "target", "skillType", "special", "opponentModifier") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "damage", "burst", "target", "skillType", "special", "opponentModifier" FROM "temporary_info_war_attack"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_info_war_attack"`, undefined);
    }

}
