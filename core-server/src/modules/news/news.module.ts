import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
// import { ConfigModule, ConfigService } from '@nestjs/config';

import { grpcServerSerivces } from 'config';
import { UserService } from 'modules/user/user.service';

import { NewsService } from './news.service';
import { NewsGateway } from './news.gateway';
import { namePkg } from './model';

@Module({
    imports: [
        ClientsModule.registerAsync([
            {
                name: namePkg,
                // transport: Transport.GRPC,
                // options: {
                //     url: 'localhost:50051',
                //     package: 'user',
                //     protoPath: 'src/proto/user/user.proto',
                // },

                // imports: [ConfigModule],
                // useFactory: async (configService: ConfigService) => {
                //     return {
                //         transport: Transport.GRPC,
                //         options: {
                //             package: 'user',
                //             protoPath: 'src/proto/user/user.proto',
                //             url: `${configService.get<string>('GRPC_GO_HR_HOST')}:${configService.get<string>('GRPC_GO_HR_PORT')}`,
                //         },
                //     };
                // },
                // inject: [ConfigService],

                useFactory: async () => {
                    const { goHr } = grpcServerSerivces();
                    const url = goHr.host + ':' + goHr.port;

                    return {
                        transport: Transport.GRPC,
                        options: {
                            package: 'user',
                            protoPath: 'src/proto/user/user.proto',
                            url: url,
                        },
                    };
                },
            },
        ]),
    ],
    providers: [NewsGateway, NewsService, UserService],
})
export class NewsModule {}
