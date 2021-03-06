import { MigrationInterface, QueryRunner } from 'typeorm';

export class addUnits1586115615324 implements MigrationInterface {
  name = 'addUnits1586115615324';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "temporary_info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "UQ_90d6f68f957ba494f33d4fde119" UNIQUE ("ammoId"), CONSTRAINT "FK_90d6f68f957ba494f33d4fde119" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "info_war_attack"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "info_war_attack"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_info_war_attack" RENAME TO "info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "classification" varchar NOT NULL, "unitType" varchar, "orderType" varchar NOT NULL, "hackable" boolean, "impetuous" varchar, "cube" varchar, "mov" varchar NOT NULL, "cc" varchar NOT NULL, "bs" varchar NOT NULL, "ph" varchar NOT NULL, "wip" varchar NOT NULL, "arm" varchar NOT NULL, "bts" varchar NOT NULL, "w" varchar NOT NULL, "structure" boolean NOT NULL, "ava" text NOT NULL)`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar)`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "unit" ("id" varchar PRIMARY KEY NOT NULL, "isProfilesSelectable" boolean NOT NULL, "notes" text NOT NULL, "primaryDetailsId" varchar, "secondaryDetailsId" varchar, CONSTRAINT "REL_f5154dc9fcd7dd967bda1daead" UNIQUE ("primaryDetailsId"), CONSTRAINT "REL_c433e3185ac659eff4003063ca" UNIQUE ("secondaryDetailsId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "REL_ee3cc89ae850a57f77dc10fd06" UNIQUE ("primaryUnitId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details_skills_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1645d04d502bf1e0e01d22a2cf" ON "details_skills_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4011aa66895614835ee9b35c23" ON "details_skills_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details_equipment_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_71bd4a6ab64ccd43348e0fd13a" ON "details_equipment_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4c43cf3e06c3f20dc808d452f4" ON "details_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_special_rules_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a88b19e12e77b92a97f7940067" ON "profile_special_rules_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_bdb3e9d79e2b14805d53f47071" ON "profile_special_rules_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_equipment_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3d311f06ca8d4ad27e01268720" ON "profile_equipment_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5f7379dc735183aebba65966e8" ON "profile_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_bsw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2e63048510bb600c940ba373a5" ON "profile_bsw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4e43a1ee0503f0ce365e583d70" ON "profile_bsw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_ccw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9d1b47955a7248120b0ea716a1" ON "profile_ccw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a37c832c5a95fef2b785f30565" ON "profile_ccw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_misc_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9e4d06f0b04dc5d2d25a14f808" ON "profile_misc_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8" ON "profile_misc_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile__info_ware_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0109033b3199914f8e8483b099" ON "profile__info_ware_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_82df001015c1ff6def6d9e9753" ON "profile__info_ware_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_added_units_unit" ("profileId" varchar NOT NULL, "unitId" varchar NOT NULL, PRIMARY KEY ("profileId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_77599303e684913ace1b656408" ON "profile_added_units_unit" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ba8fdaa42e3ec649e87498d5b8" ON "profile_added_units_unit" ("unitId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "unit_additional_units_unit" ("unitId_1" varchar NOT NULL, "unitId_2" varchar NOT NULL, PRIMARY KEY ("unitId_1", "unitId_2"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50b97ff5e153c7ca2e2473624f" ON "unit_additional_units_unit" ("unitId_1") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_faa0e7c6bf16bc4dd276e57b43" ON "unit_additional_units_unit" ("unitId_2") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry_secondary_units_unit" ("entryId" varchar NOT NULL, "unitId" varchar NOT NULL, PRIMARY KEY ("entryId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_845b26f44a0cf20158ad4ef9ce" ON "entry_secondary_units_unit" ("entryId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dbc7bd1c498a17eff128c25fe3" ON "entry_secondary_units_unit" ("unitId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar, "ammoId" varchar, CONSTRAINT "UQ_90d6f68f957ba494f33d4fde119" UNIQUE ("ammoId"), CONSTRAINT "FK_90d6f68f957ba494f33d4fde119" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "info_war_attack"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "info_war_attack"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_info_war_attack" RENAME TO "info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar, CONSTRAINT "FK_6f49b0226f62faf24ff4faacb6b" FOREIGN KEY ("unitsId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_a0ce881a77c50e65b2c9c33dc2b" FOREIGN KEY ("entriesId") REFERENCES "entry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "profile"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile" RENAME TO "profile"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_unit" ("id" varchar PRIMARY KEY NOT NULL, "isProfilesSelectable" boolean NOT NULL, "notes" text NOT NULL, "primaryDetailsId" varchar, "secondaryDetailsId" varchar, CONSTRAINT "REL_f5154dc9fcd7dd967bda1daead" UNIQUE ("primaryDetailsId"), CONSTRAINT "REL_c433e3185ac659eff4003063ca" UNIQUE ("secondaryDetailsId"), CONSTRAINT "FK_f5154dc9fcd7dd967bda1daead7" FOREIGN KEY ("primaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT "FK_c433e3185ac659eff4003063ca7" FOREIGN KEY ("secondaryDetailsId") REFERENCES "details" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_unit"("id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId") SELECT "id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId" FROM "unit"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "unit"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_unit" RENAME TO "unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "REL_ee3cc89ae850a57f77dc10fd06" UNIQUE ("primaryUnitId"), CONSTRAINT "FK_ee3cc89ae850a57f77dc10fd069" FOREIGN KEY ("primaryUnitId") REFERENCES "unit" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
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
      `DROP INDEX "IDX_1645d04d502bf1e0e01d22a2cf"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4011aa66895614835ee9b35c23"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_details_skills_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, CONSTRAINT "FK_1645d04d502bf1e0e01d22a2cf2" FOREIGN KEY ("detailsId") REFERENCES "details" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4011aa66895614835ee9b35c236" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_details_skills_rule"("detailsId", "ruleId") SELECT "detailsId", "ruleId" FROM "details_skills_rule"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details_skills_rule"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_details_skills_rule" RENAME TO "details_skills_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1645d04d502bf1e0e01d22a2cf" ON "details_skills_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4011aa66895614835ee9b35c23" ON "details_skills_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_71bd4a6ab64ccd43348e0fd13a"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4c43cf3e06c3f20dc808d452f4"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_details_equipment_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, CONSTRAINT "FK_71bd4a6ab64ccd43348e0fd13a5" FOREIGN KEY ("detailsId") REFERENCES "details" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4c43cf3e06c3f20dc808d452f46" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_details_equipment_rule"("detailsId", "ruleId") SELECT "detailsId", "ruleId" FROM "details_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details_equipment_rule"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_details_equipment_rule" RENAME TO "details_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_71bd4a6ab64ccd43348e0fd13a" ON "details_equipment_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4c43cf3e06c3f20dc808d452f4" ON "details_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a88b19e12e77b92a97f7940067"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_bdb3e9d79e2b14805d53f47071"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_special_rules_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, CONSTRAINT "FK_a88b19e12e77b92a97f79400673" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_bdb3e9d79e2b14805d53f470714" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_special_rules_rule"("profileId", "ruleId") SELECT "profileId", "ruleId" FROM "profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_special_rules_rule" RENAME TO "profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a88b19e12e77b92a97f7940067" ON "profile_special_rules_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_bdb3e9d79e2b14805d53f47071" ON "profile_special_rules_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_3d311f06ca8d4ad27e01268720"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_5f7379dc735183aebba65966e8"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_equipment_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, CONSTRAINT "FK_3d311f06ca8d4ad27e012687208" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_5f7379dc735183aebba65966e8e" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_equipment_rule"("profileId", "ruleId") SELECT "profileId", "ruleId" FROM "profile_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_equipment_rule"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_equipment_rule" RENAME TO "profile_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3d311f06ca8d4ad27e01268720" ON "profile_equipment_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5f7379dc735183aebba65966e8" ON "profile_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_2e63048510bb600c940ba373a5"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4e43a1ee0503f0ce365e583d70"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_bsw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, CONSTRAINT "FK_2e63048510bb600c940ba373a59" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_4e43a1ee0503f0ce365e583d700" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_bsw_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "profile_bsw_weapon"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_bsw_weapon"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_bsw_weapon" RENAME TO "profile_bsw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2e63048510bb600c940ba373a5" ON "profile_bsw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4e43a1ee0503f0ce365e583d70" ON "profile_bsw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9d1b47955a7248120b0ea716a1"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a37c832c5a95fef2b785f30565"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_ccw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, CONSTRAINT "FK_9d1b47955a7248120b0ea716a16" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_a37c832c5a95fef2b785f305653" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_ccw_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "profile_ccw_weapon"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_ccw_weapon"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_ccw_weapon" RENAME TO "profile_ccw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9d1b47955a7248120b0ea716a1" ON "profile_ccw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a37c832c5a95fef2b785f30565" ON "profile_ccw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9e4d06f0b04dc5d2d25a14f808"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_misc_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, CONSTRAINT "FK_9e4d06f0b04dc5d2d25a14f808e" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_6d37d4ebf79de5c1cf49ded0c85" FOREIGN KEY ("weaponId") REFERENCES "weapon" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_misc_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "profile_misc_weapon"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_misc_weapon"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_misc_weapon" RENAME TO "profile_misc_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9e4d06f0b04dc5d2d25a14f808" ON "profile_misc_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8" ON "profile_misc_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_0109033b3199914f8e8483b099"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_82df001015c1ff6def6d9e9753"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile__info_ware_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, CONSTRAINT "FK_0109033b3199914f8e8483b099a" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_82df001015c1ff6def6d9e97534" FOREIGN KEY ("infoWarAttackId") REFERENCES "info_war_attack" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile__info_ware_attacks_info_war_attack"("profileId", "infoWarAttackId") SELECT "profileId", "infoWarAttackId" FROM "profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "temporary_profile__info_ware_attacks_info_war_attack" RENAME TO "profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0109033b3199914f8e8483b099" ON "profile__info_ware_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_82df001015c1ff6def6d9e9753" ON "profile__info_ware_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_77599303e684913ace1b656408"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_ba8fdaa42e3ec649e87498d5b8"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_profile_added_units_unit" ("profileId" varchar NOT NULL, "unitId" varchar NOT NULL, CONSTRAINT "FK_77599303e684913ace1b656408d" FOREIGN KEY ("profileId") REFERENCES "profile" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_ba8fdaa42e3ec649e87498d5b84" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("profileId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_profile_added_units_unit"("profileId", "unitId") SELECT "profileId", "unitId" FROM "profile_added_units_unit"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_added_units_unit"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "temporary_profile_added_units_unit" RENAME TO "profile_added_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_77599303e684913ace1b656408" ON "profile_added_units_unit" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ba8fdaa42e3ec649e87498d5b8" ON "profile_added_units_unit" ("unitId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_50b97ff5e153c7ca2e2473624f"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_faa0e7c6bf16bc4dd276e57b43"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_unit_additional_units_unit" ("unitId_1" varchar NOT NULL, "unitId_2" varchar NOT NULL, CONSTRAINT "FK_50b97ff5e153c7ca2e2473624f7" FOREIGN KEY ("unitId_1") REFERENCES "unit" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_faa0e7c6bf16bc4dd276e57b431" FOREIGN KEY ("unitId_2") REFERENCES "unit" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("unitId_1", "unitId_2"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_unit_additional_units_unit"("unitId_1", "unitId_2") SELECT "unitId_1", "unitId_2" FROM "unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "temporary_unit_additional_units_unit" RENAME TO "unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50b97ff5e153c7ca2e2473624f" ON "unit_additional_units_unit" ("unitId_1") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_faa0e7c6bf16bc4dd276e57b43" ON "unit_additional_units_unit" ("unitId_2") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_845b26f44a0cf20158ad4ef9ce"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_dbc7bd1c498a17eff128c25fe3"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "temporary_entry_secondary_units_unit" ("entryId" varchar NOT NULL, "unitId" varchar NOT NULL, CONSTRAINT "FK_845b26f44a0cf20158ad4ef9ce9" FOREIGN KEY ("entryId") REFERENCES "entry" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_dbc7bd1c498a17eff128c25fe3e" FOREIGN KEY ("unitId") REFERENCES "unit" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("entryId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_entry_secondary_units_unit"("entryId", "unitId") SELECT "entryId", "unitId" FROM "entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "temporary_entry_secondary_units_unit" RENAME TO "entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_845b26f44a0cf20158ad4ef9ce" ON "entry_secondary_units_unit" ("entryId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dbc7bd1c498a17eff128c25fe3" ON "entry_secondary_units_unit" ("unitId") `,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `DROP INDEX "IDX_dbc7bd1c498a17eff128c25fe3"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_845b26f44a0cf20158ad4ef9ce"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "entry_secondary_units_unit" RENAME TO "temporary_entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry_secondary_units_unit" ("entryId" varchar NOT NULL, "unitId" varchar NOT NULL, PRIMARY KEY ("entryId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "entry_secondary_units_unit"("entryId", "unitId") SELECT "entryId", "unitId" FROM "temporary_entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_dbc7bd1c498a17eff128c25fe3" ON "entry_secondary_units_unit" ("unitId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_845b26f44a0cf20158ad4ef9ce" ON "entry_secondary_units_unit" ("entryId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_faa0e7c6bf16bc4dd276e57b43"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_50b97ff5e153c7ca2e2473624f"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "unit_additional_units_unit" RENAME TO "temporary_unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "unit_additional_units_unit" ("unitId_1" varchar NOT NULL, "unitId_2" varchar NOT NULL, PRIMARY KEY ("unitId_1", "unitId_2"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "unit_additional_units_unit"("unitId_1", "unitId_2") SELECT "unitId_1", "unitId_2" FROM "temporary_unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_faa0e7c6bf16bc4dd276e57b43" ON "unit_additional_units_unit" ("unitId_2") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_50b97ff5e153c7ca2e2473624f" ON "unit_additional_units_unit" ("unitId_1") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_ba8fdaa42e3ec649e87498d5b8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_77599303e684913ace1b656408"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_added_units_unit" RENAME TO "temporary_profile_added_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_added_units_unit" ("profileId" varchar NOT NULL, "unitId" varchar NOT NULL, PRIMARY KEY ("profileId", "unitId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_added_units_unit"("profileId", "unitId") SELECT "profileId", "unitId" FROM "temporary_profile_added_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_added_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_ba8fdaa42e3ec649e87498d5b8" ON "profile_added_units_unit" ("unitId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_77599303e684913ace1b656408" ON "profile_added_units_unit" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_82df001015c1ff6def6d9e9753"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_0109033b3199914f8e8483b099"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile__info_ware_attacks_info_war_attack" RENAME TO "temporary_profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile__info_ware_attacks_info_war_attack" ("profileId" varchar NOT NULL, "infoWarAttackId" varchar NOT NULL, PRIMARY KEY ("profileId", "infoWarAttackId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile__info_ware_attacks_info_war_attack"("profileId", "infoWarAttackId") SELECT "profileId", "infoWarAttackId" FROM "temporary_profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_82df001015c1ff6def6d9e9753" ON "profile__info_ware_attacks_info_war_attack" ("infoWarAttackId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_0109033b3199914f8e8483b099" ON "profile__info_ware_attacks_info_war_attack" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9e4d06f0b04dc5d2d25a14f808"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_misc_weapon" RENAME TO "temporary_profile_misc_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_misc_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_misc_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "temporary_profile_misc_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_misc_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8" ON "profile_misc_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9e4d06f0b04dc5d2d25a14f808" ON "profile_misc_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a37c832c5a95fef2b785f30565"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9d1b47955a7248120b0ea716a1"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_ccw_weapon" RENAME TO "temporary_profile_ccw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_ccw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_ccw_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "temporary_profile_ccw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_ccw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a37c832c5a95fef2b785f30565" ON "profile_ccw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_9d1b47955a7248120b0ea716a1" ON "profile_ccw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4e43a1ee0503f0ce365e583d70"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_2e63048510bb600c940ba373a5"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_bsw_weapon" RENAME TO "temporary_profile_bsw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_bsw_weapon" ("profileId" varchar NOT NULL, "weaponId" varchar NOT NULL, PRIMARY KEY ("profileId", "weaponId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_bsw_weapon"("profileId", "weaponId") SELECT "profileId", "weaponId" FROM "temporary_profile_bsw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_bsw_weapon"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4e43a1ee0503f0ce365e583d70" ON "profile_bsw_weapon" ("weaponId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_2e63048510bb600c940ba373a5" ON "profile_bsw_weapon" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_5f7379dc735183aebba65966e8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_3d311f06ca8d4ad27e01268720"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_equipment_rule" RENAME TO "temporary_profile_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_equipment_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_equipment_rule"("profileId", "ruleId") SELECT "profileId", "ruleId" FROM "temporary_profile_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5f7379dc735183aebba65966e8" ON "profile_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_3d311f06ca8d4ad27e01268720" ON "profile_equipment_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_bdb3e9d79e2b14805d53f47071"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a88b19e12e77b92a97f7940067"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "profile_special_rules_rule" RENAME TO "temporary_profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile_special_rules_rule" ("profileId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("profileId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile_special_rules_rule"("profileId", "ruleId") SELECT "profileId", "ruleId" FROM "temporary_profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_bdb3e9d79e2b14805d53f47071" ON "profile_special_rules_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a88b19e12e77b92a97f7940067" ON "profile_special_rules_rule" ("profileId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4c43cf3e06c3f20dc808d452f4"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_71bd4a6ab64ccd43348e0fd13a"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "details_equipment_rule" RENAME TO "temporary_details_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details_equipment_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "details_equipment_rule"("detailsId", "ruleId") SELECT "detailsId", "ruleId" FROM "temporary_details_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_details_equipment_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4c43cf3e06c3f20dc808d452f4" ON "details_equipment_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_71bd4a6ab64ccd43348e0fd13a" ON "details_equipment_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4011aa66895614835ee9b35c23"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_1645d04d502bf1e0e01d22a2cf"`,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "details_skills_rule" RENAME TO "temporary_details_skills_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "details_skills_rule" ("detailsId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("detailsId", "ruleId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "details_skills_rule"("detailsId", "ruleId") SELECT "detailsId", "ruleId" FROM "temporary_details_skills_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_details_skills_rule"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4011aa66895614835ee9b35c23" ON "details_skills_rule" ("ruleId") `,
      undefined,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_1645d04d502bf1e0e01d22a2cf" ON "details_skills_rule" ("detailsId") `,
      undefined,
    );
    await queryRunner.query(
      `ALTER TABLE "entry" RENAME TO "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "entry" ("id" varchar PRIMARY KEY NOT NULL, "isc" varchar NOT NULL, "name" varchar NOT NULL, "sectorials" text NOT NULL, "primaryUnitId" varchar, CONSTRAINT "REL_ee3cc89ae850a57f77dc10fd06" UNIQUE ("primaryUnitId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "entry"("id", "isc", "name", "sectorials", "primaryUnitId") SELECT "id", "isc", "name", "sectorials", "primaryUnitId" FROM "temporary_entry"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_entry"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "unit" RENAME TO "temporary_unit"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "unit" ("id" varchar PRIMARY KEY NOT NULL, "isProfilesSelectable" boolean NOT NULL, "notes" text NOT NULL, "primaryDetailsId" varchar, "secondaryDetailsId" varchar, CONSTRAINT "REL_f5154dc9fcd7dd967bda1daead" UNIQUE ("primaryDetailsId"), CONSTRAINT "REL_c433e3185ac659eff4003063ca" UNIQUE ("secondaryDetailsId"))`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "unit"("id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId") SELECT "id", "isProfilesSelectable", "notes", "primaryDetailsId", "secondaryDetailsId" FROM "temporary_unit"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_unit"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "profile" RENAME TO "temporary_profile"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "profile" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "cost" integer NOT NULL, "swc" integer NOT NULL, "sectorial" text NOT NULL, "unitsId" varchar, "entriesId" varchar)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "profile"("id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId") SELECT "id", "name", "cost", "swc", "sectorial", "unitsId", "entriesId" FROM "temporary_profile"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "temporary_profile"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "info_war_attack" RENAME TO "temporary_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "UQ_90d6f68f957ba494f33d4fde119" UNIQUE ("ammoId"), CONSTRAINT "FK_90d6f68f957ba494f33d4fde119" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "temporary_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_dbc7bd1c498a17eff128c25fe3"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_845b26f44a0cf20158ad4ef9ce"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "entry_secondary_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_faa0e7c6bf16bc4dd276e57b43"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_50b97ff5e153c7ca2e2473624f"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "unit_additional_units_unit"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_ba8fdaa42e3ec649e87498d5b8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_77599303e684913ace1b656408"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_added_units_unit"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_82df001015c1ff6def6d9e9753"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_0109033b3199914f8e8483b099"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile__info_ware_attacks_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_6d37d4ebf79de5c1cf49ded0c8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9e4d06f0b04dc5d2d25a14f808"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_misc_weapon"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_a37c832c5a95fef2b785f30565"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_9d1b47955a7248120b0ea716a1"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_ccw_weapon"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_4e43a1ee0503f0ce365e583d70"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_2e63048510bb600c940ba373a5"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_bsw_weapon"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_5f7379dc735183aebba65966e8"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_3d311f06ca8d4ad27e01268720"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "profile_equipment_rule"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_bdb3e9d79e2b14805d53f47071"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_a88b19e12e77b92a97f7940067"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "profile_special_rules_rule"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_4c43cf3e06c3f20dc808d452f4"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_71bd4a6ab64ccd43348e0fd13a"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details_equipment_rule"`, undefined);
    await queryRunner.query(
      `DROP INDEX "IDX_4011aa66895614835ee9b35c23"`,
      undefined,
    );
    await queryRunner.query(
      `DROP INDEX "IDX_1645d04d502bf1e0e01d22a2cf"`,
      undefined,
    );
    await queryRunner.query(`DROP TABLE "details_skills_rule"`, undefined);
    await queryRunner.query(`DROP TABLE "entry"`, undefined);
    await queryRunner.query(`DROP TABLE "unit"`, undefined);
    await queryRunner.query(`DROP TABLE "profile"`, undefined);
    await queryRunner.query(`DROP TABLE "details"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "info_war_attack" RENAME TO "temporary_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `CREATE TABLE "info_war_attack" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL, "attackType" varchar NOT NULL, "category" varchar NOT NULL, "attackModifier" varchar NOT NULL, "oponentModifer" varchar NOT NULL, "damage" varchar NOT NULL, "burst" varchar NOT NULL, "target" varchar NOT NULL, "skillType" varchar NOT NULL, "special" varchar NOT NULL, "ammoId" varchar, CONSTRAINT "UQ_90d6f68f957ba494f33d4fde119" UNIQUE ("ammoId"), CONSTRAINT "FK_90d6f68f957ba494f33d4fde119" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`,
      undefined,
    );
    await queryRunner.query(
      `INSERT INTO "info_war_attack"("id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId") SELECT "id", "link", "name", "attackType", "category", "attackModifier", "oponentModifer", "damage", "burst", "target", "skillType", "special", "ammoId" FROM "temporary_info_war_attack"`,
      undefined,
    );
    await queryRunner.query(
      `DROP TABLE "temporary_info_war_attack"`,
      undefined,
    );
  }
}
