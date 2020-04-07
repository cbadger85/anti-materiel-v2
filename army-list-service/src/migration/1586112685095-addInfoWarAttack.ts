import {MigrationInterface, QueryRunner} from "typeorm";

export class addInfoWarAttack1586112685095 implements MigrationInterface {
    name = 'addInfoWarAttack1586112685095'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "REL_90d6f68f957ba494f33d4fde11" UNIQUE ("ammoId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "REL_90d6f68f957ba494f33d4fde11" UNIQUE ("ammoId"), CONSTRAINT "FK_90d6f68f957ba494f33d4fde119" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "info_war_attack"`, undefined);
        await queryRunner.query(`DROP TABLE "info_war_attack"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_info_war_attack" RENAME TO "info_war_attack"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "info_war_attack" RENAME TO "temporary_info_war_attack"`, undefined);
        await queryRunner.query(`CREATE TABLE "info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "REL_90d6f68f957ba494f33d4fde11" UNIQUE ("ammoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "temporary_info_war_attack"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_info_war_attack"`, undefined);
        await queryRunner.query(`DROP TABLE "info_war_attack"`, undefined);
    }

}
