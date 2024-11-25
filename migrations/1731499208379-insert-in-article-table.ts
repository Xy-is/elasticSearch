import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertInArticleTable1731499208379 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const articles = [
      {
        title: 'Введение в NestJS',
        author: 'Джейн Доу',
        content:
          'NestJS — это фреймворк для создания эффективных и масштабируемых серверных приложений на Node.js.',
      },
      {
        title: 'Начало работы с Kafka',
        author: 'Джон Смит',
        content:
          'Kafka — это распределённая стриминговая платформа, которая может обрабатывать высокопроизводительные потоки данных.',
      },
      {
        title: 'Создание REST API с использованием TypeScript',
        author: 'Алиса Джонсон',
        content:
          'Использование TypeScript в разработке бэкенда обеспечивает безопасность типов и улучшенную поддержку инструментов.',
      },
      {
        title: 'Лучшие практики миграции баз данных',
        author: 'Боб Браун',
        content:
          'Миграции помогают сохранять изменения в схеме базы данных версионированными и удобными для сопровождения.',
      },
      {
        title: 'Оптимизация SQL-запросов',
        author: 'Кэрол Уайт',
        content:
          'Эффективные SQL-запросы могут значительно повысить производительность приложения.',
      },
      {
        title: 'Микросервисы на Node.js',
        author: 'Ева Блэк',
        content:
          'Научитесь создавать микросервисы на Node.js и управлять распределёнными системами.',
      },
      {
        title: 'GraphQL vs REST: что выбрать?',
        author: 'Фрэнк Грин',
        content: 'Сравнение GraphQL и REST для создания гибких API.',
      },
      {
        title: 'Введение в TypeORM',
        author: 'Грейс Блу',
        content:
          'TypeORM — это мощный ORM, который хорошо работает с TypeScript в проектах на Node.js.',
      },
      {
        title: 'Масштабирование приложений на Node.js',
        author: 'Хэнк Браун',
        content:
          'Узнайте стратегии масштабирования приложений на Node.js для работы с большим количеством пользователей.',
      },
      {
        title: 'CI/CD для JavaScript-проектов',
        author: 'Айви Уайт',
        content:
          'Как настроить CI/CD пайплайны для автоматизации тестирования и развертывания.',
      },
      {
        title: 'Использование JWT для аутентификации',
        author: 'Джейн Доу',
        content:
          'JWT (JSON Web Tokens) используются для безопасной, статической аутентификации в веб-приложениях.',
      },
      {
        title: 'Создание WebSockets с NestJS',
        author: 'Джон Смит',
        content:
          'WebSockets обеспечивают связь в реальном времени для чатов и уведомлений.',
      },
      {
        title: 'Использование Kafka в событийно-ориентированной архитектуре',
        author: 'Алиса Джонсон',
        content:
          'Kafka часто используется в событийно-ориентированной архитектуре для развязки сервисов.',
      },
      {
        title: 'Управление SQL-транзакциями в Node.js',
        author: 'Боб Браун',
        content:
          'Узнайте о SQL-транзакциях и как работать с ними в приложениях на Node.js.',
      },
      {
        title: 'Стратегии кэширования в NestJS',
        author: 'Кэрол Уайт',
        content:
          'Изучите стратегии кэширования для повышения производительности приложений.',
      },
      {
        title: 'Что такое Docker и контейнеры',
        author: 'Ева Блэк',
        content:
          'Контейнеры позволяют приложениям работать в изолированных средах.',
      },
      {
        title: 'Введение в Kubernetes',
        author: 'Фрэнк Грин',
        content:
          'Kubernetes — это инструмент для оркестрации контейнеризированных приложений.',
      },
      {
        title: 'Использование Redis для кэширования',
        author: 'Грейс Блу',
        content:
          'Redis — это быстрая, работающая в памяти база данных, часто используемая для кэширования данных.',
      },
      {
        title: 'Развертывание Node.js приложений с Docker',
        author: 'Хэнк Браун',
        content:
          'Руководство по контейнеризации и развертыванию приложений Node.js с использованием Docker.',
      },
      {
        title: 'Серверный рендеринг с Next.js',
        author: 'Айви Уайт',
        content:
          'Next.js предоставляет серверный рендеринг для более быстрой загрузки и SEO-дружественных веб-приложений.',
      },
      {
        title: 'Реализация управления доступом на основе ролей (RBAC)',
        author: 'Джейн Доу',
        content:
          'RBAC необходим для управления разрешениями и безопасности в приложениях.',
      },
      {
        title: 'Использование Elasticsearch для полнотекстового поиска',
        author: 'Джон Смит',
        content:
          'Elasticsearch идеально подходит для реализации полнотекстового поиска и аналитики.',
      },
      {
        title: 'Балансировка нагрузки с помощью NGINX',
        author: 'Алиса Джонсон',
        content:
          'NGINX — это высокопроизводительный балансировщик нагрузки, часто используемый в распределённых приложениях.',
      },
      {
        title: 'Мониторинг приложений с Prometheus',
        author: 'Боб Браун',
        content:
          'Prometheus используется для мониторинга и оповещения о метриках производительности приложений.',
      },
      {
        title: 'Создание REST API с использованием Express.js',
        author: 'Кэрол Уайт',
        content:
          'Express.js — это популярный фреймворк для Node.js для создания RESTful API.',
      },
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
