import * as Joi from 'joi';

import { ENameEnv } from './type';

export const validEnvSchema = Joi.object({
    NODE_ENV: Joi.string().valid(
        ENameEnv.dev,
        ENameEnv.qc,
        ENameEnv.uat,
        ENameEnv.production,
    ),

    HTTP_SERVER_ADDRESS: Joi.string().required(),
    HTTP_SERVER_PORT: Joi.number().default(3000),
    HTTP_SERVER_TIMEOUT: Joi.number().required(),
    HTTP_SERVER_APP_VERSION: Joi.string().required(),
    HTTP_SERVER_READ_TIMEOUT: Joi.number().required(),
    HTTP_SERVER_WRITE_TIMEOUT: Joi.number().required(),
    HTTP_SERVER_SSL: Joi.boolean(),
    HTTP_SERVER_DEFAULT_TIMEOUT: Joi.number().required(),

    DB_REDIS_HOST: Joi.string().required(),
    DB_REDIS_PORT: Joi.number().required(),
    DB_REDIS_USER: Joi.string().allow(''),
    DB_REDIS_PASSWORD: Joi.string().allow(''),
    DB_REDIS_DB: Joi.number().required(),
    DB_REDIS_DEFAULT: Joi.number().required(),
    DB_REDIS_MIN_IDLE_CONNS: Joi.number().required(),
    DB_REDIS_POOL_SIZE: Joi.number().required(),
    DB_REDIS_POOL_TIMEOUT: Joi.number().required(),
    DB_REDIS_TTL: Joi.number().required(),

    DB_MYSQL_HOST: Joi.string().required(),
    DB_MYSQL_PORT: Joi.number().required(),
    DB_MYSQL_NAME: Joi.string().required(),
    DB_MYSQL_USER: Joi.string().required(),
    DB_MYSQL_PASSWORD: Joi.string().required(),
    DB_MYSQL_SSL: Joi.boolean(),
    DB_MYSQL_PARSE_TIME: Joi.boolean(),
    DB_MYSQL_TIMEZONE: Joi.string().required(),
    DB_MYSQL_TIMEOUT_SECONDS: Joi.number().required(),
    DB_MYSQL_MAX_OPEN_CONN: Joi.number().required(),
    DB_MYSQL_CONN_MAX_LIFETIME_MINUTES: Joi.number().required(),
    DB_MYSQL_MAX_IDEL_CONN: Joi.number().required(),
    DB_MYSQL_CONN_MAX_IDLE_TIME_SECONDS: Joi.number().required(),

    JWT_TYPE_TOKEN: Joi.string().required(),
    JWT_SECRECT_KEY: Joi.string().required(),
    JWT_EXPIRES_TIME: Joi.number().required(),

    LOGGER_FOLDER: Joi.string().required(),
    LOGGER_MAX_SIZE: Joi.number().required(),
    LOGGER_MAX_AGE: Joi.number().required(),
    LOGGER_MAX_BACKUP: Joi.number().required(),
    LOGGER_COMPRESS: Joi.boolean(),

    GRPC_GO_HR_HOST: Joi.string().required(),
    GRPC_GO_HR_PORT: Joi.number().required(),
    GRPC_GO_HR_BASIC_AUTHEN_USER: Joi.string().required(),
    GRPC_GO_HR_BASIC_AUTHEN_PASS: Joi.string().required(),
});
