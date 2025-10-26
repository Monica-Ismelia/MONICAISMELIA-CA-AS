import { Controller, Get, Post, Patch, Delete, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ProductServiceService } from './product-service.service';
import { CreateProductServiceDto } from './dto/CreateProductService.dto';
import { UpdateProductServiceDto } from './dto/UpdateProductService.dto';
import { ProductService } from './entity/product-service.entity';

@Controller('product-service')
export class ProductServiceController {
  constructor(private readonly productServiceService: ProductServiceService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: CreateProductServiceDto): Promise<ProductService> {
    return this.productServiceService.create(createDto);
  }

  @Get()
  findAll(): Promise<ProductService[]> {
    return this.productServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductService> {
    return this.productServiceService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProductServiceDto,
  ): Promise<ProductService> {
    return this.productServiceService.update(id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.productServiceService.remove(id);
  }
}
