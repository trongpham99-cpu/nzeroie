import { redisStore } from 'cache-manager-redis-yet';
import { DB } from 'config';

const RedisConn = async () => {
    const { host, port, user, password, ttl } = DB().redis;

    const store = await redisStore({
        socket: {
            host: host,
            port: port,
        },
        ttl,
        username: user,
        password: password,
    });
    return {
        store,
    };
};

export default RedisConn;
