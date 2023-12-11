import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1701745442497 implements MigrationInterface {
    name = 'Init1701745442497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "full_name" varchar NOT NULL, "email" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
