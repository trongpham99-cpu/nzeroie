import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JWT } from 'config';
import { AuthService } from './auth.service';

@Module({
    imports: [
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async () => {
                const { jwt_secret_key, expire_hour } = await JWT();

                return {
                    secret: jwt_secret_key,
                    signOptions: {
                        expiresIn: expire_hour,
                    },
                };
            },
        }),
    ],
    providers: [AuthService],
    exports: [AuthService],
})
export class AuthModule {}
