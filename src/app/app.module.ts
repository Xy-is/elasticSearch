import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from '../article/article.module'; // Импортируем ArticleModule
import { typeOrmConfig } from '../config/typeorm.config'; // Импортируем конфигурацию TypeORM

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), // Инициализация подключения к базе данных
    ElasticsearchModule.register({
      node: 'http://localhost:9200', // Адрес Elasticsearch
      auth: {
        username: 'ADMIN', // Логин для подключения
        password: 'root', // Пароль для подключения
      },
    }),
    ArticleModule, // Добавляем ArticleModule в imports
  ],
  providers: [],
})
export class AppModule {}
