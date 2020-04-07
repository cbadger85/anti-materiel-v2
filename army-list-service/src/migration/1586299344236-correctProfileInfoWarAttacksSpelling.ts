import { MigrationInterface, QueryRunner } from 'typeorm';

export class correctProfileInfoWarAttacksSpelling1586299344236
  implements MigrationInterface {
  name = 'correctProfileInfoWarAttacksSpelling1586299344236';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP TABLE "profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile__info_war_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_51375b34d5e3c463b410c26b05" ON "profile__info_war_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_efa5ecb592afed900b1a9f809f" ON "profile__info_war_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_51375b34d5e3c463b410c26b05"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_efa5ecb592afed900b1a9f809f"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile__info_war_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, CONSTRAINT "FK_51375b34d5e3c463b410c26b05e" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_efa5ecb592afed900b1a9f809ff" FOREIGN KEY ("infoWarAttackId") REFERENCES "info_war_attack" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile__info_war_attacks_info_war_attack"("profileId", "infoWarAttackId") SELECT "profileId", "infoWarAttackId" FROM "profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "temporary_profile__info_war_attacks_info_war_attack" RENAME TO "profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_51375b34d5e3c463b410c26b05" ON "profile__info_war_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_efa5ecb592afed900b1a9f809f" ON "profile__info_war_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "profile__info_war_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_efa5ecb592afed900b1a9f809f"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_51375b34d5e3c463b410c26b05"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile__info_war_attacks_info_war_attack" RENAME TO "temporary_profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile__info_war_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile__info_war_attacks_info_war_attack"("profileId", "infoWarAttackId") SELECT "profileId", "infoWarAttackId" FROM "temporary_profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_efa5ecb592afed900b1a9f809f" ON "profile__info_war_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_51375b34d5e3c463b410c26b05" ON "profile__info_war_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_efa5ecb592afed900b1a9f809f"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_51375b34d5e3c463b410c26b05"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile__info_war_attacks_info_war_attack"`,
      undefined,
    );
  }
}
