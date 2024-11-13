import { ElasticsearchService } from '@nestjs/elasticsearch';
import { DataSource } from 'typeorm';
export declare class ArticleService {
    private readonly dataSource;
    private readonly elasticsearchService;
    constructor(dataSource: DataSource, elasticsearchService: ElasticsearchService);
    getArticles(): Promise<any>;
    createIndex(): Promise<void>;
    indexArticles(): Promise<void>;
    searchArticles(query: string): Promise<unknown[]>;
}
