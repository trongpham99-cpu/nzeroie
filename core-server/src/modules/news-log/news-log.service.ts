import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsLogService {
    getNewsLog(): string {
        return 'Hi there, how are you?';
    }
}
