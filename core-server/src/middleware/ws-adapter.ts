import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import SocketIO from 'socket.io';

import { AuthService } from 'modules/auth/auth.service';
import { keyAuthorHeaderAttach } from './const';

export class WsAdapter extends IoAdapter {
    private readonly authService: AuthService;

    constructor(private app: INestApplicationContext) {
        super(app);
        this.authService = this.app.get(AuthService);
    }

    createIOServer(port: number, options?: SocketIO.ServerOptions): any {
        options.allowRequest = async (req, allowFn) => {
            const findIndexKeyAuthor = req.rawHeaders.findIndex(
                (item) => item.toLowerCase() === keyAuthorHeaderAttach,
            );
            const getBearToken = req.rawHeaders[findIndexKeyAuthor + 1];

            if (getBearToken.includes('Bearer ')) {
                const tokenArr: string[] = getBearToken.split(' ');
                const decodeToken = this.authService.verifyJwt(tokenArr[1]);

                return decodeToken
                    .then(() => {
                        return allowFn(null, true);
                    })
                    .catch(() => {
                        return allowFn('Unauthorized', false);
                    });
            }
            return allowFn('Unauthorized', false);
        };

        return super.createIOServer(port, options);
    }
}

// https://github.com/nestjs/nest/issues/882#issuecomment-632698668    Middleware for socket
