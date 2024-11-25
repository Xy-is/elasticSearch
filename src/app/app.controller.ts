import { Get, Controller, Render, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('main')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('')
  @Render('index')
  async search(@Query('search') searchQuery: string) {
    const searchResult = searchQuery
      ? await this.appService.search(searchQuery)
      : await this.appService.getAllArticles();

    return { searchQuery, searchResult };
  }
}
