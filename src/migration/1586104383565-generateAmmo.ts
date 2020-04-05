import {MigrationInterface, QueryRunner} from "typeorm";

export class generateAmmo1586104383565 implements MigrationInterface {
    name = 'generateAmmo1586104383565'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "rule" ("id" varchar PRIMARY KEY NOT NULL, "link" varchar, "name" varchar NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "rule"`, undefined);
    }

}
