import { ArticleService } from './article.service';
export declare class ArticleController {
    private readonly articleSearchService;
    constructor(articleSearchService: ArticleService);
    search(query: string): Promise<unknown[]>;
    createIndex(): Promise<void>;
    insertArticleToIndex(): Promise<void>;
}
