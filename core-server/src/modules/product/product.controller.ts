import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResponse } from './model';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    findOne(id: string): Promise<ProductResponse> {
        return this.productService.findOne(id);
    }
}
