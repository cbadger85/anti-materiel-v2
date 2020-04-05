import {MigrationInterface, QueryRunner} from "typeorm";

export class fixAmmoAndTraitsJoinTable1586113351762 implements MigrationInterface {
    name = 'fixAmmoAndTraitsJoinTable1586113351762'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "weapon_mode_ammo_ammo" ("weaponModeId" varchar NOT NULL, "ammoId" varchar NOT NULL, PRIMARY KEY ("weaponModeId", "ammoId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_fddee4ffc66ea4ba1443c2832d" ON "weapon_mode_ammo_ammo" ("weaponModeId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_2bd997d4981451aa2681d0c4a2" ON "weapon_mode_ammo_ammo" ("ammoId") `, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_mode_traits_rule" ("weaponModeId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("weaponModeId", "ruleId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ef5082367fcb00abe4f9e17be5" ON "weapon_mode_traits_rule" ("weaponModeId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3cec9eb20ba9b686b0c0374944" ON "weapon_mode_traits_rule" ("ruleId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_fddee4ffc66ea4ba1443c2832d"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_2bd997d4981451aa2681d0c4a2"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_mode_ammo_ammo" ("weaponModeId" varchar NOT NULL, "ammoId" varchar NOT NULL, CONSTRAINT "FK_fddee4ffc66ea4ba1443c2832d6" FOREIGN KEY ("weaponModeId") REFERENCES "weapon_mode" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_2bd997d4981451aa2681d0c4a2b" FOREIGN KEY ("ammoId") REFERENCES "ammo" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("weaponModeId", "ammoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_mode_ammo_ammo"("weaponModeId", "ammoId") SELECT "weaponModeId", "ammoId" FROM "weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_mode_ammo_ammo" RENAME TO "weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_fddee4ffc66ea4ba1443c2832d" ON "weapon_mode_ammo_ammo" ("weaponModeId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_2bd997d4981451aa2681d0c4a2" ON "weapon_mode_ammo_ammo" ("ammoId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ef5082367fcb00abe4f9e17be5"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_3cec9eb20ba9b686b0c0374944"`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_weapon_mode_traits_rule" ("weaponModeId" varchar NOT NULL, "ruleId" varchar NOT NULL, CONSTRAINT "FK_ef5082367fcb00abe4f9e17be5d" FOREIGN KEY ("weaponModeId") REFERENCES "weapon_mode" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_3cec9eb20ba9b686b0c0374944f" FOREIGN KEY ("ruleId") REFERENCES "rule" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, PRIMARY KEY ("weaponModeId", "ruleId"))`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_weapon_mode_traits_rule"("weaponModeId", "ruleId") SELECT "weaponModeId", "ruleId" FROM "weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_weapon_mode_traits_rule" RENAME TO "weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ef5082367fcb00abe4f9e17be5" ON "weapon_mode_traits_rule" ("weaponModeId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3cec9eb20ba9b686b0c0374944" ON "weapon_mode_traits_rule" ("ruleId") `, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP INDEX "IDX_3cec9eb20ba9b686b0c0374944"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ef5082367fcb00abe4f9e17be5"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_mode_traits_rule" RENAME TO "temporary_weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_mode_traits_rule" ("weaponModeId" varchar NOT NULL, "ruleId" varchar NOT NULL, PRIMARY KEY ("weaponModeId", "ruleId"))`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_mode_traits_rule"("weaponModeId", "ruleId") SELECT "weaponModeId", "ruleId" FROM "temporary_weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3cec9eb20ba9b686b0c0374944" ON "weapon_mode_traits_rule" ("ruleId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_ef5082367fcb00abe4f9e17be5" ON "weapon_mode_traits_rule" ("weaponModeId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_2bd997d4981451aa2681d0c4a2"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_fddee4ffc66ea4ba1443c2832d"`, undefined);
        await queryRunner.query(`ALTER TABLE "weapon_mode_ammo_ammo" RENAME TO "temporary_weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE TABLE "weapon_mode_ammo_ammo" ("weaponModeId" varchar NOT NULL, "ammoId" varchar NOT NULL, PRIMARY KEY ("weaponModeId", "ammoId"))`, undefined);
        await queryRunner.query(`INSERT INTO "weapon_mode_ammo_ammo"("weaponModeId", "ammoId") SELECT "weaponModeId", "ammoId" FROM "temporary_weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_weapon_mode_ammo_ammo"`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_2bd997d4981451aa2681d0c4a2" ON "weapon_mode_ammo_ammo" ("ammoId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_fddee4ffc66ea4ba1443c2832d" ON "weapon_mode_ammo_ammo" ("weaponModeId") `, undefined);
        await queryRunner.query(`DROP INDEX "IDX_3cec9eb20ba9b686b0c0374944"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_ef5082367fcb00abe4f9e17be5"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode_traits_rule"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_2bd997d4981451aa2681d0c4a2"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_fddee4ffc66ea4ba1443c2832d"`, undefined);
        await queryRunner.query(`DROP TABLE "weapon_mode_ammo_ammo"`, undefined);
    }

}
