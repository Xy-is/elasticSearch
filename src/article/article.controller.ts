import { Controller, Get, Post, Query } from '@nestjs/common';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleSearchService: ArticleService) {}
  @Get()
  async search(@Query('query') query: string) {
    return await this.articleSearchService.searchArticles(query);
  }

  @Post('create')
  async createIndex() {
    return await this.articleSearchService.createIndex();
  }

  @Post('insert')
  async insertArticleToIndex() {
    return await this.articleSearchService.indexArticles();
  }
}
