import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateArticleTable1731498058877 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE article(
            Id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            author VARCHAR(255),
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`);

    // Шаг 2: Создание функции для обновления updated_at
    await queryRunner.query(`
        CREATE OR REPLACE FUNCTION update_updated_at_column()
        RETURNS TRIGGER AS $$
        BEGIN
            NEW.updated_at = NOW();
            RETURN NEW;
        END;
        $$ LANGUAGE plpgsql;
        `);

    // Шаг 3: Создание триггера для вызова функции при обновлении статьи
    await queryRunner.query(`
        CREATE TRIGGER update_article_updated_at
        BEFORE UPDATE ON article
        FOR EACH ROW
        EXECUTE FUNCTION update_updated_at_column();
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Удаление триггера и функции
    await queryRunner.query(
      `DROP TRIGGER IF EXISTS update_article_updated_at ON article`,
    );
    await queryRunner.query(`DROP FUNCTION IF EXISTS update_updated_at_column`);

    // Удаление таблицы
    await queryRunner.query(`DROP TABLE IF EXISTS article`);
  }
}
