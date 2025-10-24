
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from './entity/product-service.entity';
import {CreateProductServiceDto } from './product-serviceDto/Createproductservice.dto';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateproductServiceDto } from './product-serviceDto/UpdateproductService.dto';

@Injectable()
export class ProductoServicioService{
    constructor(
        @InjectRepository(ProductService)
        private readonly ProductServiceRepository: Repository<ProductService>,
    ) {}

    async create(dto: CreateProductServiceDto): Promise<ProductService>{
        const existing = await this.ProductServiceRepository.findOne({where: {prod_name: dto.prod_name}});
        if (existing){
            throw new ConflictException(`El producto/servicio ${dto.prod_name} ya existe`);
        }

        const newProductService = this.ProductServiceRepository.create(dto);
        return this.ProductServiceRepository.save(newProductService);
    }

    async findAll(): Promise<ProductService[]>{
        return this.ProductServiceRepository.find();
    }

    async findOne(id: number): Promise<ProductService>{
        const item = await this.ProductServiceRepository.findOne({where:{Id_product_service: id}});
        if (!item){
            throw new NotFoundException(`Porducto/servicio con Id ${id} no encontrado.`);
        }
        return item;
    }

    async update(id: number, dto:UpdateproductServiceDto): Promise<ProductService>{
        const item =await this.findOne(id);

        Object.assign(item, dto);
        return this.ProductServiceRepository.save(item);
    }

    async remove(id: number): Promise<{message: string}>{
        const result = await this.ProductServiceRepository.delete(id);
        if (result.affected === 0){
            throw new NotFoundException(`Product/service con Id ${id} no encontrado.`)
        }
        return { 
            message: `El producto/servicio con el id ${id} ha si do elimidano.`
        };
        
    }
}
