"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArticleTable1731498058877 = void 0;
class CreateArticleTable1731498058877 {
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE article(
            Id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255),
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);
        await queryRunner.query(`
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
        `);
        await queryRunner.query(`
        CREATE TRIGGER update_article_updated_at
        BEFORE UPDATE ON article
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TRIGGER IF EXISTS update_article_updated_at ON article`);
        await queryRunner.query(`DROP FUNCTION IF EXISTS update_updated_at_column`);
        await queryRunner.query(`DROP TABLE IF EXISTS article`);
    }
}
exports.CreateArticleTable1731498058877 = CreateArticleTable1731498058877;
//# sourceMappingURL=1731498058877-create-article-table.js.map