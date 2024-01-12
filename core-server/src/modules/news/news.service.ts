import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import { IResponseCommon } from 'models';
import { GoHrMetadata } from '_services/grpc';

import { UpdateViewNewsDto } from './dto/update-view-news.dto';
import { UserService, UserResponse, nameService, namePkg } from './model';

@Injectable()
export class NewsService {
    private userService: UserService;

    constructor(@Inject(namePkg) private readonly client: ClientGrpc) {
        this.userService = this.client.getService<UserService>(nameService);
    }

    async updateViewNews(
        id: number[],
        updateViewNewsDto: UpdateViewNewsDto,
    ): Promise<IResponseCommon<UserResponse>> {
        console.log('updateViewNewsDto: ', updateViewNewsDto);

        let result: IResponseCommon<UserResponse> = null;
        await firstValueFrom(
            this.userService.findOne({ id: id[0] }, GoHrMetadata()),
        )
            .then((item) => {
                result = {
                    message: 'success',
                    status: 200,
                    code: 0,
                    data: item,
                };
                return result;
            })
            .catch((err) => {
                console.log('err: ', err);
                result = {
                    message: err.details,
                    status: 401,
                    code: err.code,
                    data: null,
                };
                return result;
            });
        return result;
    }
}

// https://golangbyexample.com/http-basic-auth-golang/
