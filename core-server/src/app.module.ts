import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheModule } from '@nestjs/cache-manager';

import type { RedisClientOptions } from 'redis';

import { AuthMiddleware } from 'middleware/auth';
import config, { envProcess } from 'config';
import { validEnvSchema } from 'config/valid';
import MySqlConn from 'db/mysql';
import RedisConn from 'db/redis';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// import { NewsLogModule } from './modules/news-log/news-log.module';
// import { NewsModule } from './modules/news/news.module';
// import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProductModule } from './modules/product/product.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [
                `${process.cwd()}/src/config/env/.env.${envProcess.NODE_ENV}`,
            ],
            load: [config],
            isGlobal: true,
            validationSchema: validEnvSchema,
        }),
        TypeOrmModule.forRoot(MySqlConn()),
        CacheModule.registerAsync<RedisClientOptions>({
            isGlobal: true,
            useFactory: RedisConn,
        }),
        // NewsLogModule,
        // NewsModule,
        // UserModule,
        ProductModule,
        AuthModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    // middleware for restfull api
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware).forRoutes('');
    }
}
