import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import compression from 'compression';
import cookieParser from 'cookie-parser';

// import { VerifyJwt } from 'middleware/jwt';
import { WsAdapter } from 'middleware/ws-adapter';

import config from './config';

async function bootstrap() {
    const getPortConfig = config().httpServer.port;
    const app = await NestFactory.create(AppModule, {
        logger: ['error', 'warn', 'debug', 'warn', 'log'],
    });

    app.enableCors();
    app.use(compression());
    app.use(cookieParser());
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe());

    // app.use(new VerifyJwt().use); // middleware global for Restfull api
    app.useWebSocketAdapter(new WsAdapter(app)); // middleware global for Websocket

    await app.listen(getPortConfig);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
