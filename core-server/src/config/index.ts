export const envProcess = process.env;

export const httpServer = () => {
    const {
        HTTP_SERVER_ADDRESS,
        HTTP_SERVER_PORT,
        HTTP_SERVER_TIMEOUT,
        HTTP_SERVER_APP_VERSION,
        HTTP_SERVER_READ_TIMEOUT,
        HTTP_SERVER_WRITE_TIMEOUT,
        HTTP_SERVER_SSL,
        HTTP_SERVER_DEFAULT_TIMEOUT,
    } = envProcess;

    return {
        address: HTTP_SERVER_ADDRESS,
        port: Number(HTTP_SERVER_PORT) || 3000,
        timeout: Number(HTTP_SERVER_TIMEOUT),
        app_version: HTTP_SERVER_APP_VERSION,
        read_timeout: Number(HTTP_SERVER_READ_TIMEOUT),
        write_timeout: Number(HTTP_SERVER_WRITE_TIMEOUT),
        ssl: HTTP_SERVER_SSL === 'true',
        default_timeout: Number(HTTP_SERVER_DEFAULT_TIMEOUT),
    };
};

export const grpcServerSerivces = () => {
    const {
        GRPC_GO_HR_HOST,
        GRPC_GO_HR_PORT,
        GRPC_GO_HR_BASIC_AUTHEN_USER,
        GRPC_GO_HR_BASIC_AUTHEN_PASS,
    } = envProcess;

    return {
        goHr: {
            host: GRPC_GO_HR_HOST,
            port: GRPC_GO_HR_PORT,
            baUser: GRPC_GO_HR_BASIC_AUTHEN_USER,
            baPass: GRPC_GO_HR_BASIC_AUTHEN_PASS,
        },
    };
};

export const DB = () => {
    const {
        DB_REDIS_HOST,
        DB_REDIS_PORT,
        DB_REDIS_USER,
        DB_REDIS_PASSWORD,
        DB_REDIS_DB,
        DB_REDIS_DEFAULT,
        DB_REDIS_MIN_IDLE_CONNS,
        DB_REDIS_POOL_SIZE,
        DB_REDIS_POOL_TIMEOUT,
        DB_REDIS_TTL,

        DB_MYSQL_HOST,
        DB_MYSQL_PORT,
        DB_MYSQL_NAME,
        DB_MYSQL_USER,
        DB_MYSQL_PASSWORD,
        DB_MYSQL_SSL,
        DB_MYSQL_PARSE_TIME,
        DB_MYSQL_TIMEZONE,
        DB_MYSQL_TIMEOUT_SECONDS,
        DB_MYSQL_MAX_OPEN_CONN,
        DB_MYSQL_CONN_MAX_LIFETIME_MINUTES,
        DB_MYSQL_MAX_IDEL_CONN,
        DB_MYSQL_CONN_MAX_IDLE_TIME_SECONDS,
    } = envProcess;

    return {
        redis: {
            host: DB_REDIS_HOST,
            port: Number(DB_REDIS_PORT),
            user: DB_REDIS_USER,
            password: DB_REDIS_PASSWORD,
            db: Number(DB_REDIS_DB),
            default_db: Number(DB_REDIS_DEFAULT),
            min_idle_conns: Number(DB_REDIS_MIN_IDLE_CONNS),
            pool_size: Number(DB_REDIS_POOL_SIZE),
            pool_timeout: Number(DB_REDIS_POOL_TIMEOUT),
            ttl: Number(DB_REDIS_TTL),
        },
        mysql: {
            host: DB_MYSQL_HOST,
            port: Number(DB_MYSQL_PORT),
            db_name: DB_MYSQL_NAME,
            user: DB_MYSQL_USER,
            password: DB_MYSQL_PASSWORD,
            ssl_mode: DB_MYSQL_SSL === 'true',
            parse_time: DB_MYSQL_PARSE_TIME === 'true',
            time_zone: DB_MYSQL_TIMEZONE,
            timeout_second: Number(DB_MYSQL_TIMEOUT_SECONDS),
            max_open_conn: Number(DB_MYSQL_MAX_OPEN_CONN),
            conn_max_lifetime_minutes: Number(
                DB_MYSQL_CONN_MAX_LIFETIME_MINUTES,
            ),
            max_idle_conn: Number(DB_MYSQL_MAX_IDEL_CONN),
            conn_max_idle_time_seconds: Number(
                DB_MYSQL_CONN_MAX_IDLE_TIME_SECONDS,
            ),
        },
    };
};

export const JWT = () => {
    const { JWT_TYPE_TOKEN, JWT_SECRECT_KEY, JWT_EXPIRES_TIME } = envProcess;
    return {
        type_token: JWT_TYPE_TOKEN,
        jwt_secret_key: JWT_SECRECT_KEY,
        expire_hour: Number(JWT_EXPIRES_TIME),
    };
};

export const LOGGER = () => {
    const {
        LOGGER_FOLDER,
        LOGGER_MAX_SIZE,
        LOGGER_MAX_AGE,
        LOGGER_MAX_BACKUP,
        LOGGER_COMPRESS,
    } = envProcess;
    return {
        folder: LOGGER_FOLDER,
        max_size: Number(LOGGER_MAX_SIZE),
        max_age: Number(LOGGER_MAX_AGE),
        max_backup: Number(LOGGER_MAX_BACKUP),
        compress: LOGGER_COMPRESS === 'true',
    };
};

const config = () => {
    return {
        env: envProcess.NODE_ENV,
        httpServer: httpServer(),
        grpcServices: grpcServerSerivces(),
        db: DB(),
        jwt: JWT(),
        logger: LOGGER(),
    };
};

export default config;
