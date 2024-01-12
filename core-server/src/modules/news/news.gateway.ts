import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { validParams } from 'utils/validation';
import { IResponseCommon } from 'models';

import { NewsService } from './news.service';
import { UpdateViewNewsDto } from './dto/update-view-news.dto';
import { schema } from './valid';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
    namespace: 'news',
})
export class NewsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    constructor(private readonly newsService: NewsService) {}

    async handleConnection(_client: any) {
        console.log('---> Connected...');
        // console.log('headers: ', _client.handshake.headers.authorization);
    }

    async handleDisconnect(socket: Socket) {
        socket.disconnect();
    }

    @SubscribeMessage('update-view')
    async updateView(@MessageBody() updateViewForNews: UpdateViewNewsDto): Promise<IResponseCommon<any>> {
        const validResult = await validParams(schema, updateViewForNews);
        if (validResult) {
            return validResult;
        }
        const result = this.newsService.updateViewNews(updateViewForNews.id, updateViewForNews);

        return result;
    }
}
