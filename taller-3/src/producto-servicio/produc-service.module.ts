import { Module } from '@nestjs/common';
import { ProductService } from './entity/product-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductServiceController} from './product-service.controller';
import { ProductoServicioService } from './produc-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductService])],
  controllers: [ProductServiceController],
  providers: [ProductoServicioService]
})
export class ProductoServicioModule {}
