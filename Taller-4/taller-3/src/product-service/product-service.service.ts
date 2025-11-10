import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductService } from './entity/product-service.entity';
import { CreateProductServiceDto } from './dto/CreateProductService.dto';
import { UpdateProductServiceDto } from './dto/UpdateProductService.dto';


@Injectable()
export class ProductServiceService {
  constructor(
    @InjectRepository(ProductService)
    private readonly productServiceRepository: Repository<ProductService>,
  ) {}

  async create(createDto: CreateProductServiceDto): Promise<ProductService> {
    const existing = await this.productServiceRepository.findOne({ where: { name: createDto.name } });
    if (existing) {
      throw new ConflictException(`Product/Service ${createDto.name} already exists`);
    }
    const product = this.productServiceRepository.create(createDto);
    return this.productServiceRepository.save(product);
  }

  async findAll(): Promise<ProductService[]> {
    return this.productServiceRepository.find();
  }

  async findOne(id: number): Promise<ProductService> {
    const item = await this.productServiceRepository.findOne({ where: { Id_product_service: id } });
    if (!item) {
      throw new NotFoundException(`Product/Service with Id ${id} not found`);
    }
    return item;
  }

  async update(id: number, dto: UpdateProductServiceDto): Promise<ProductService> {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.productServiceRepository.save(item);
  }

  async remove(id: number): Promise<{ message: string }> {
    const result = await this.productServiceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product/Service with Id ${id} not found`);
    }
    return { message: `Product/Service with Id ${id} has been deleted` };
  }
}
