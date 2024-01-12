import { Injectable } from '@nestjs/common';
import { ProductResponse } from './model';

@Injectable()
export class ProductService {
    constructor() {}

    async findOne(id: string): Promise<ProductResponse> {
        return {
            id: id,
            name: 'abc',
            price: 123,
        };
    }
}
