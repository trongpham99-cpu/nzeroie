import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { AuthService } from 'modules/auth/auth.service';

import { keyAuthorHeaderAttach } from './const';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    constructor(private authService: AuthService) {}

    async use(req: Request, _res: Response, next: NextFunction) {
        const tokenArr: string[] =
            req.headers[keyAuthorHeaderAttach]?.split(' ');
        if (!tokenArr) {
            throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
        }

        const decodeToken = this.authService.verifyJwt(tokenArr[1]);
        return decodeToken
            .then(() => next())
            .catch(() => {
                throw new HttpException(
                    'Unauthorized',
                    HttpStatus.UNAUTHORIZED,
                );
            });
    }
}
