"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsertInArticleTable1731499208379 = void 0;
var InsertInArticleTable1731499208379 = /** @class */ (function () {
    function InsertInArticleTable1731499208379() {
    }
    InsertInArticleTable1731499208379.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            // Функция для генерации случайной даты в пределах последних 100 дней
            function getRandomDateInPast(days) {
                var now = new Date();
                var pastDate = new Date();
                pastDate.setDate(now.getDate() - Math.floor(Math.random() * days));
                pastDate.setHours(Math.floor(Math.random() * 24));
                pastDate.setMinutes(Math.floor(Math.random() * 60));
                pastDate.setSeconds(Math.floor(Math.random() * 60));
                return pastDate;
            }
            var articles, i, article, createdAt, updatedAt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        articles = [
                            {
                                title: 'Introduction to NestJS',
                                author: 'Jane Doe',
                                content: 'NestJS is a framework for building efficient, scalable Node.js server-side applications.',
                            },
                            {
                                title: 'Getting Started with Kafka',
                                author: 'John Smith',
                                content: 'Kafka is a distributed streaming platform that can handle high-throughput data pipelines.',
                            },
                            {
                                title: 'Building a REST API with TypeScript',
                                author: 'Alice Johnson',
                                content: 'Using TypeScript in backend development provides type safety and better tooling support.',
                            },
                            {
                                title: 'Database Migrations Best Practices',
                                author: 'Bob Brown',
                                content: 'Migrations help in keeping database schema changes versioned and maintainable.',
                            },
                            {
                                title: 'Optimizing SQL Queries',
                                author: 'Carol White',
                                content: 'Efficient SQL queries can significantly improve the performance of an application.',
                            },
                            {
                                title: 'Microservices with Node.js',
                                author: 'Eve Black',
                                content: 'Learn how to build microservices with Node.js and manage distributed systems.',
                            },
                            {
                                title: 'GraphQL vs REST: Which to Choose?',
                                author: 'Frank Green',
                                content: 'A comparison of GraphQL and REST for building flexible APIs.',
                            },
                            {
                                title: 'Introduction to TypeORM',
                                author: 'Grace Blue',
                                content: 'TypeORM is a powerful ORM that works well with TypeScript in Node.js projects.',
                            },
                            {
                                title: 'Scaling Node.js Applications',
                                author: 'Hank Brown',
                                content: 'Discover strategies for scaling Node.js applications to handle large numbers of users.',
                            },
                            {
                                title: 'CI/CD for JavaScript Projects',
                                author: 'Ivy White',
                                content: 'How to set up CI/CD pipelines to automate testing and deployment.',
                            },
                            {
                                title: 'Understanding JWT for Authentication',
                                author: 'Jane Doe',
                                content: 'JWT (JSON Web Tokens) are used for secure, stateless authentication in web applications.',
                            },
                            {
                                title: 'Building WebSockets with NestJS',
                                author: 'John Smith',
                                content: 'WebSockets provide real-time communication for chat and live notifications.',
                            },
                            {
                                title: 'Using Kafka for Event-Driven Architecture',
                                author: 'Alice Johnson',
                                content: 'Kafka is often used in event-driven architecture to decouple services.',
                            },
                            {
                                title: 'Managing SQL Transactions in Node.js',
                                author: 'Bob Brown',
                                content: 'Learn about SQL transactions and how to handle them in Node.js applications.',
                            },
                            {
                                title: 'Caching Strategies in NestJS',
                                author: 'Carol White',
                                content: 'Discover caching strategies for improving application performance.',
                            },
                            {
                                title: 'Understanding Docker and Containers',
                                author: 'Eve Black',
                                content: 'Containers allow applications to run in isolated environments.',
                            },
                            {
                                title: 'Introduction to Kubernetes',
                                author: 'Frank Green',
                                content: 'Kubernetes is an orchestration tool for managing containerized applications.',
                            },
                            {
                                title: 'Using Redis for Caching',
                                author: 'Grace Blue',
                                content: 'Redis is a fast, in-memory database commonly used for caching data.',
                            },
                            {
                                title: 'Deploying Node.js with Docker',
                                author: 'Hank Brown',
                                content: 'A guide on how to containerize and deploy Node.js applications using Docker.',
                            },
                            {
                                title: 'Server-Side Rendering with Next.js',
                                author: 'Ivy White',
                                content: 'Next.js provides server-side rendering for faster loading and SEO-friendly web apps.',
                            },
                            {
                                title: 'Implementing Role-Based Access Control',
                                author: 'Jane Doe',
                                content: 'RBAC is essential for managing permissions and security in applications.',
                            },
                            {
                                title: 'Using Elasticsearch for Full-Text Search',
                                author: 'John Smith',
                                content: 'Elasticsearch is ideal for implementing full-text search and analytics.',
                            },
                            {
                                title: 'Load Balancing with NGINX',
                                author: 'Alice Johnson',
                                content: 'NGINX is a high-performance load balancer often used in distributed applications.',
                            },
                            {
                                title: 'Monitoring Applications with Prometheus',
                                author: 'Bob Brown',
                                content: 'Prometheus is used to monitor and alert on application performance metrics.',
                            },
                            {
                                title: 'Building REST APIs with Express.js',
                                author: 'Carol White',
                                content: 'Express.js is a popular Node.js framework for building RESTful APIs.',
                            },
                            {
                                title: 'Setting up PostgreSQL with Node.js',
                                author: 'Eve Black',
                                content: 'PostgreSQL is a powerful, open-source database widely used in production.',
                            },
                            {
                                title: 'Introduction to RabbitMQ',
                                author: 'Frank Green',
                                content: 'RabbitMQ is a message broker that facilitates communication between services.',
                            },
                            {
                                title: 'Implementing OAuth 2.0 in Node.js',
                                author: 'Grace Blue',
                                content: 'OAuth 2.0 is a protocol for authorization used to secure APIs and web applications.',
                            },
                            {
                                title: 'Data Encryption with Node.js',
                                author: 'Hank Brown',
                                content: 'Learn how to encrypt and secure data in Node.js applications.',
                            },
                            {
                                title: 'Error Handling in NestJS',
                                author: 'Ivy White',
                                content: 'Effective error handling improves reliability and user experience.',
                            },
                            {
                                title: 'Optimizing Docker Images for Production',
                                author: 'Jane Doe',
                                content: 'Creating lightweight, secure Docker images is crucial for production environments.',
                            },
                            {
                                title: 'REST vs GraphQL Performance Comparison',
                                author: 'John Smith',
                                content: 'Explore the performance differences between REST and GraphQL APIs.',
                            },
                            {
                                title: 'Deploying Applications to AWS',
                                author: 'Alice Johnson',
                                content: 'AWS provides a reliable and scalable infrastructure for deploying web applications.',
                            },
                            {
                                title: 'Building Serverless Applications with AWS Lambda',
                                author: 'Bob Brown',
                                content: 'AWS Lambda enables serverless architecture for reducing costs and improving scalability.',
                            },
                            {
                                title: 'Working with Webhooks',
                                author: 'Carol White',
                                content: 'Webhooks allow applications to communicate with each other in real-time.',
                            },
                            {
                                title: 'Using Git for Version Control',
                                author: 'Eve Black',
                                content: 'Git is essential for collaboration and version management in software projects.',
                            },
                            {
                                title: 'Intro to API Rate Limiting',
                                author: 'Frank Green',
                                content: 'Rate limiting helps prevent abuse and protect application resources.',
                            },
                            {
                                title: 'Database Indexing for Performance',
                                author: 'Grace Blue',
                                content: 'Indexes improve query performance but require careful management.',
                            },
                            {
                                title: 'Handling Concurrency in Node.js',
                                author: 'Hank Brown',
                                content: 'Learn how to manage concurrency in Node.js applications for better performance.',
                            },
                            {
                                title: 'Introduction to Microservices Architecture',
                                author: 'Ivy White',
                                content: 'Microservices architecture breaks down applications into modular, scalable services.',
                            },
                            // ... продолжение данных до 100 статей
                        ];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 40)) return [3 /*break*/, 4];
                        article = articles[i];
                        createdAt = getRandomDateInPast(100);
                        updatedAt = getRandomDateInPast(100);
                        return [4 /*yield*/, queryRunner.query("\n        INSERT INTO article (title, author, content, created_at, updated_at)\n        VALUES ($1, $2, $3, $4, $5)\n      ", [article.title, article.author, article.content, createdAt, updatedAt])];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    InsertInArticleTable1731499208379.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("DELETE FROM article")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return InsertInArticleTable1731499208379;
}());
exports.InsertInArticleTable1731499208379 = InsertInArticleTable1731499208379;
