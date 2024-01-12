import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { DB } from 'config';

const MySqlConn = (): MysqlConnectionOptions => {
    const getDbConfig = DB().mysql;

    return {
        type: 'mysql',
        database: getDbConfig.db_name,
        username: getDbConfig.user,
        password: getDbConfig.password,
        port: getDbConfig.port,
        host: getDbConfig.host,
    };
};
export default MySqlConn;
