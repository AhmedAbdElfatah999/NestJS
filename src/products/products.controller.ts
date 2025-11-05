import { Controller, Get } from "@nestjs/common";

@Controller()
export class ProductsController{
    @Get('/api/products')
    getProducts()
    {
        return [

            {id:1,name:'pen',price:5},
            {id:2,name:'notebook',price:15},
            {id:3,name:'pencil',price:2}
        ];
    }
}