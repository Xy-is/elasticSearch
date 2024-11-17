import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    ElasticsearchModule.register({
      node: 'http://localhost:9200',
      auth: {
        username: 'ADMIN',
        password: 'root',
      },
    }),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
