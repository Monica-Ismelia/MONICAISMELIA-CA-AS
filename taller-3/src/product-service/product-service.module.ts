
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './entity/product-service.entity';
import { ProductServiceController } from './product-service.controller';
import { ProductServiceService } from './product-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductService])],
  controllers: [ProductServiceController],
  providers: [ProductServiceService],
})
export class ProductServiceModule {}
