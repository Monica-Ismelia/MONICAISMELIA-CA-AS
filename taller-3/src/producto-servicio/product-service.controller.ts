import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ProductoServicioService } from './produc-service.service';
import { CreateProductServiceDto } from './product-serviceDto/Createproductservice.dto';
import { UpdateproductServiceDto } from './product-serviceDto/UpdateproductService.dto';
import { ProductService } from './entity/product-service.entity';

@Controller('produc-service')
export class ProductServiceController{
    constructor(private readonly productServicioService: ProductoServicioService) {}
    @Post ()
    @HttpCode(HttpStatus.CREATED)
    create(@Body()createProductServicioDto: CreateProductServiceDto): Promise<ProductService>{
        return this.productServicioService.create(createProductServicioDto);
    }
    @Get()
    findAll(): Promise<ProductService[]>{
        return this.productServicioService.findAll();
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id:number,
        @Body() updateProductServiceDto: UpdateproductServiceDto): Promise<ProductService>
        {
            return this.productServicioService.update(id, updateProductServiceDto);
        }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<{message: string}>{
        return this.productServicioService.remove(id);
    }
    
}

