import { PartialType } from '@nestjs/mapped-types';
import { CreateProductServiceDto } from './CreateProductService.dto';


export class UpdateProductServiceDto extends PartialType(CreateProductServiceDto) {}
