import { Controller, Get } from '@nestjs/common';
import { NewsLogService } from './news-log.service';

@Controller('news-log')
export class NewsLogController {
    constructor(private readonly newsLogService: NewsLogService) {}

    @Get()
    getHello(): string {
        return this.newsLogService.getNewsLog();
    }
}
