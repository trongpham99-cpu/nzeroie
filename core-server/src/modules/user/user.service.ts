import { Injectable } from '@nestjs/common';

import { validParams } from 'utils/validation';
import { IResponseCommon } from 'models';

import { schema } from './valid';

@Injectable()
export class UserService {
    async findOne(id: number): Promise<IResponseCommon<null | any>> {
        const validResult = await validParams(schema, id);
        if (validResult) {
            return validResult;
        }

        return null;
    }
}
