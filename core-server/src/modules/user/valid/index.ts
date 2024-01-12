import * as Joi from 'joi';

export const schema = Joi.object({
    id: Joi.number().required(),
});
