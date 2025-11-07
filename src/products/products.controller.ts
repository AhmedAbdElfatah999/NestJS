// src/products/products.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ProductsService } from './products.service';
  import { CreateProductDto } from './dto/create-product.dto';
  import { UpdateProductDto } from './dto/update-product.dto';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    // CREATE
    @Post()
    create(@Body() createProductDto: CreateProductDto) {
      return this.productsService.create(createProductDto);
    }
  
    // READ ALL
    @Get()
    findAll() {
      return this.productsService.findAll();
    }
  
    // READ ONE
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productsService.findOne(id);
    }
  
    // UPDATE
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateProductDto: UpdateProductDto,
    ) {
      return this.productsService.update(id, updateProductDto);
    }
  
    // DELETE
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.productsService.remove(id);
    }
  }
  