import { Metadata } from '@grpc/grpc-js';

import { grpcServerSerivces } from 'config';

export const GoHrMetadata = (): Metadata => {
    const { goHr } = grpcServerSerivces();

    const endcodeUserPassBase64 = btoa(`${goHr.baUser}:${goHr.baPass}`);

    const metadata = new Metadata();
    metadata.set('Authorization', `Basic ${endcodeUserPassBase64}`);

    return metadata;
};
