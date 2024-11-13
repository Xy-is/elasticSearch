"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const elasticsearch_1 = require("@nestjs/elasticsearch");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ArticleService = class ArticleService {
    constructor(dataSource, elasticsearchService) {
        this.dataSource = dataSource;
        this.elasticsearchService = elasticsearchService;
    }
    async getArticles() {
        return await this.dataSource.query('SELECT * FROM article ORDER BY created_at DESC');
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
    async searchArticles(query) {
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
        return response.hits.hits.map((hit) => hit._source);
    }
};
exports.ArticleService = ArticleService;
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        elasticsearch_1.ElasticsearchService])
], ArticleService);
//# sourceMappingURL=article.service.js.map