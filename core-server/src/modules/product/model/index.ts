import { Observable } from 'rxjs';

export interface ProductResponse {
    id: string;
    name: string;
    price: number;
}

export interface ProductService {
    findOne(id: string): Observable<ProductResponse>;
}

export const nameService = 'ProductService';

export const namePkg = 'PRODUCT_PACKAGE';
