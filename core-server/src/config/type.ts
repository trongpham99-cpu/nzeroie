import { Obj } from 'type';

export enum ENameEnv {
    dev = 'dev',
    qc = 'qc',
    uat = 'uat',
    production = 'production',
}

export interface IenvName {
    env: string;
    httpServer: Obj;
    db: Obj;
    jwt: Obj;
    logger: Obj;
}
