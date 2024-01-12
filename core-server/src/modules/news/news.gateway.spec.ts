import { Test, TestingModule } from '@nestjs/testing';
import { NewsGateway } from './news.gateway';
import { NewsService } from './news.service';

describe('NewsGateway', () => {
    let gateway: NewsGateway;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [NewsGateway, NewsService],
        }).compile();

        gateway = module.get<NewsGateway>(NewsGateway);
    });

    it('should be defined', () => {
        expect(gateway).toBeDefined();
    });
});
