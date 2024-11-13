import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInArticleTable1731499208379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const articles = [
      {
        title: 'Introduction to NestJS',
        author: 'Jane Doe',
        content:
          'NestJS is a framework for building efficient, scalable Node.js server-side applications.',
      },
      {
        title: 'Getting Started with Kafka',
        author: 'John Smith',
        content:
          'Kafka is a distributed streaming platform that can handle high-throughput data pipelines.',
      },
      {
        title: 'Building a REST API with TypeScript',
        author: 'Alice Johnson',
        content:
          'Using TypeScript in backend development provides type safety and better tooling support.',
      },
      {
        title: 'Database Migrations Best Practices',
        author: 'Bob Brown',
        content:
          'Migrations help in keeping database schema changes versioned and maintainable.',
      },
      {
        title: 'Optimizing SQL Queries',
        author: 'Carol White',
        content:
          'Efficient SQL queries can significantly improve the performance of an application.',
      },
      {
        title: 'Microservices with Node.js',
        author: 'Eve Black',
        content:
          'Learn how to build microservices with Node.js and manage distributed systems.',
      },
      {
        title: 'GraphQL vs REST: Which to Choose?',
        author: 'Frank Green',
        content: 'A comparison of GraphQL and REST for building flexible APIs.',
      },
      {
        title: 'Introduction to TypeORM',
        author: 'Grace Blue',
        content:
          'TypeORM is a powerful ORM that works well with TypeScript in Node.js projects.',
      },
      {
        title: 'Scaling Node.js Applications',
        author: 'Hank Brown',
        content:
          'Discover strategies for scaling Node.js applications to handle large numbers of users.',
      },
      {
        title: 'CI/CD for JavaScript Projects',
        author: 'Ivy White',
        content:
          'How to set up CI/CD pipelines to automate testing and deployment.',
      },
      {
        title: 'Understanding JWT for Authentication',
        author: 'Jane Doe',
        content:
          'JWT (JSON Web Tokens) are used for secure, stateless authentication in web applications.',
      },
      {
        title: 'Building WebSockets with NestJS',
        author: 'John Smith',
        content:
          'WebSockets provide real-time communication for chat and live notifications.',
      },
      {
        title: 'Using Kafka for Event-Driven Architecture',
        author: 'Alice Johnson',
        content:
          'Kafka is often used in event-driven architecture to decouple services.',
      },
      {
        title: 'Managing SQL Transactions in Node.js',
        author: 'Bob Brown',
        content:
          'Learn about SQL transactions and how to handle them in Node.js applications.',
      },
      {
        title: 'Caching Strategies in NestJS',
        author: 'Carol White',
        content:
          'Discover caching strategies for improving application performance.',
      },
      {
        title: 'Understanding Docker and Containers',
        author: 'Eve Black',
        content:
          'Containers allow applications to run in isolated environments.',
      },
      {
        title: 'Introduction to Kubernetes',
        author: 'Frank Green',
        content:
          'Kubernetes is an orchestration tool for managing containerized applications.',
      },
      {
        title: 'Using Redis for Caching',
        author: 'Grace Blue',
        content:
          'Redis is a fast, in-memory database commonly used for caching data.',
      },
      {
        title: 'Deploying Node.js with Docker',
        author: 'Hank Brown',
        content:
          'A guide on how to containerize and deploy Node.js applications using Docker.',
      },
      {
        title: 'Server-Side Rendering with Next.js',
        author: 'Ivy White',
        content:
          'Next.js provides server-side rendering for faster loading and SEO-friendly web apps.',
      },
      {
        title: 'Implementing Role-Based Access Control',
        author: 'Jane Doe',
        content:
          'RBAC is essential for managing permissions and security in applications.',
      },
      {
        title: 'Using Elasticsearch for Full-Text Search',
        author: 'John Smith',
        content:
          'Elasticsearch is ideal for implementing full-text search and analytics.',
      },
      {
        title: 'Load Balancing with NGINX',
        author: 'Alice Johnson',
        content:
          'NGINX is a high-performance load balancer often used in distributed applications.',
      },
      {
        title: 'Monitoring Applications with Prometheus',
        author: 'Bob Brown',
        content:
          'Prometheus is used to monitor and alert on application performance metrics.',
      },
      {
        title: 'Building REST APIs with Express.js',
        author: 'Carol White',
        content:
          'Express.js is a popular Node.js framework for building RESTful APIs.',
      },
      {
        title: 'Setting up PostgreSQL with Node.js',
        author: 'Eve Black',
        content:
          'PostgreSQL is a powerful, open-source database widely used in production.',
      },
      {
        title: 'Introduction to RabbitMQ',
        author: 'Frank Green',
        content:
          'RabbitMQ is a message broker that facilitates communication between services.',
      },
      {
        title: 'Implementing OAuth 2.0 in Node.js',
        author: 'Grace Blue',
        content:
          'OAuth 2.0 is a protocol for authorization used to secure APIs and web applications.',
      },
      {
        title: 'Data Encryption with Node.js',
        author: 'Hank Brown',
        content:
          'Learn how to encrypt and secure data in Node.js applications.',
      },
      {
        title: 'Error Handling in NestJS',
        author: 'Ivy White',
        content:
          'Effective error handling improves reliability and user experience.',
      },
      {
        title: 'Optimizing Docker Images for Production',
        author: 'Jane Doe',
        content:
          'Creating lightweight, secure Docker images is crucial for production environments.',
      },
      {
        title: 'REST vs GraphQL Performance Comparison',
        author: 'John Smith',
        content:
          'Explore the performance differences between REST and GraphQL APIs.',
      },
      {
        title: 'Deploying Applications to AWS',
        author: 'Alice Johnson',
        content:
          'AWS provides a reliable and scalable infrastructure for deploying web applications.',
      },
      {
        title: 'Building Serverless Applications with AWS Lambda',
        author: 'Bob Brown',
        content:
          'AWS Lambda enables serverless architecture for reducing costs and improving scalability.',
      },
      {
        title: 'Working with Webhooks',
        author: 'Carol White',
        content:
          'Webhooks allow applications to communicate with each other in real-time.',
      },
      {
        title: 'Using Git for Version Control',
        author: 'Eve Black',
        content:
          'Git is essential for collaboration and version management in software projects.',
      },
      {
        title: 'Intro to API Rate Limiting',
        author: 'Frank Green',
        content:
          'Rate limiting helps prevent abuse and protect application resources.',
      },
      {
        title: 'Database Indexing for Performance',
        author: 'Grace Blue',
        content:
          'Indexes improve query performance but require careful management.',
      },
      {
        title: 'Handling Concurrency in Node.js',
        author: 'Hank Brown',
        content:
          'Learn how to manage concurrency in Node.js applications for better performance.',
      },
      {
        title: 'Introduction to Microservices Architecture',
        author: 'Ivy White',
        content:
          'Microservices architecture breaks down applications into modular, scalable services.',
      },
      // ... продолжение данных до 100 статей
    ];

    // Функция для генерации случайной даты в пределах последних 100 дней
    function getRandomDateInPast(days: number): Date {
      const now = new Date();
      const pastDate = new Date();
      pastDate.setDate(now.getDate() - Math.floor(Math.random() * days));
      pastDate.setHours(Math.floor(Math.random() * 24));
      pastDate.setMinutes(Math.floor(Math.random() * 60));
      pastDate.setSeconds(Math.floor(Math.random() * 60));
      return pastDate;
    }

    for (let i = 0; i < 40; i++) {
      const article = articles[i];

      // Генерируем случайные created_at и updated_at
      const createdAt = getRandomDateInPast(100);
      const updatedAt = getRandomDateInPast(100);

      await queryRunner.query(
        `
        INSERT INTO article (title, author, content, created_at, updated_at)
        VALUES ($1, $2, $3, $4, $5)
      `,
        [article.title, article.author, article.content, createdAt, updatedAt],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM article`);
  }
}
