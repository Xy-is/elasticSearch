import { Injectable } from '@nestjs/common';
import { ArticleService } from '../article/article.service';

@Injectable()
export class AppService {
  constructor(private readonly articleService: ArticleService) {}
  search(searchQuery: string) {
    return this.articleService.searchArticles(searchQuery);
  }

  getAllArticles() {
    return this.articleService.getArticles();
  }
}
