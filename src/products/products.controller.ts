// src/products/products.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ValidationPipe,
    ParseUUIDPipe,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { UpdateProductDto } from './dto/update-product.dto';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    // CREATE
    @Post()
    create(@Body(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true})) createProductDto: CreateProductDto) {
      return this.productsService.create(createProductDto);
    }
  
    // READ ALL
    @Get()
    findAll() {
      return this.productsService.findAll();
    }
  
    // READ ONE
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.productsService.findOne(id);
    }
  
    // UPDATE
    @Put(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateProductDto: UpdateProductDto,
    ) {
      return this.productsService.update(id, updateProductDto);
    }
  
    // DELETE
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.productsService.remove(id);
    }
  }
  