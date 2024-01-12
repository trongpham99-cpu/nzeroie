import { Module } from '@nestjs/common';

import { NewsLogController } from './news-log.controller';
import { NewsLogService } from './news-log.service';

@Module({
    controllers: [NewsLogController],
    providers: [NewsLogService],
})
export class NewsLogModule {
    constructor() {
        console.log('aaa');
    }
}
