import { ObjectSchema } from 'joi';

import { IResponseCommon } from 'models';

export const validParams = async (
    schema: ObjectSchema,
    params: any,
): Promise<IResponseCommon<null> | null> => {
    const { error } = await schema.validate(params);

    let result: IResponseCommon<null> | null = null;
    if (error) {
        result = {
            message: error.details[0].message,
            status: 200,
            code: 0,
            data: null,
        };
    }
    return result;
};
