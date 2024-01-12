import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';

export interface UserRequest {
    id: number;
}

export interface UserResponse {
    profile: string;
    staffInfo: string;
}

export interface UserService {
    findOne(req: UserRequest, metadata: Metadata): Observable<UserResponse>;
}

export const nameService = 'UserService';

export const namePkg = 'USER_PACKAGE';
