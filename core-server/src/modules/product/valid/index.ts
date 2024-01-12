import * as Joi from 'joi';

export const schema = Joi.object({
    id: Joi.array().items(Joi.number().required()),
});
