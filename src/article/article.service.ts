import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Injectable()
export class ArticleService {
  constructor(
    @InjectDataSource() private readonly dataSource: DataSource,
    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  async getArticles() {
    return await this.dataSource.query(
      'SELECT * FROM article ORDER BY created_at DESC',
    );
  }

  async createIndex() {
    const indexExists = await this.elasticsearchService.indices.exists({
      index: 'articles',
    });
    if (!indexExists) {
      await this.elasticsearchService.indices.create({
        index: 'articles',
        body: {
          settings: {
            analysis: {
              filter: {
                synonym_filter: {
                  type: 'synonym',
                  synonyms: ['brave, courageous', 'fast, quick'],
                },
              },
              analyzer: {
                custom_analyzer: {
                  type: 'custom',
                  tokenizer: 'standard',
                  filter: ['lowercase', 'synonym_filter'],
                },
              },
            },
          },
          mappings: {
            properties: {
              title: { type: 'text', analyzer: 'custom_analyzer' },
              author: { type: 'text', analyzer: 'standard' },
              content: { type: 'text', analyzer: 'custom_analyzer' },
              created_at: { type: 'date' },
            },
          },
        },
      });
    }
  }
  async indexArticles() {
    const articles = await this.getArticles();
    for (const article of articles) {
      await this.elasticsearchService.index({
        index: 'articles',
        id: article.id.toString(),
        body: {
          title: article.title,
          author: article.author,
          content: article.content,
          created_at: article.created_at,
        },
      });
    }
  }

  async searchArticles(query: string) {
    const response = await this.elasticsearchService.search({
      index: 'articles',
      body: {
        query: {
          multi_match: {
            query,
            fields: ['title^3', 'content^2', 'author'],
            fuzziness: 'auto',
          },
        },
      },
    });

    // Исправленный доступ к результатам поиска
    return response.hits.hits.map((hit) => hit._source);
  }
}
