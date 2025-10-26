import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Bill } from '../../bill/entity/bill.entity';
import { ProductService } from '../../product-service/entity/product-service.entity';

@Entity('detabill')
export class DetaBill {
  @PrimaryGeneratedColumn({ name: 'Id_detabill' })
  Id_detabill: number;

  @Column()
  Id_bill: number;

  @Column()
  Id_product_service: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  quantity: number;

  @ManyToOne(() => Bill, (bill) => bill.detabill)
  @JoinColumn({ name: 'Id_bill', referencedColumnName: 'Id_bill' })
  bill: Bill;

  @ManyToOne(() => ProductService, (productService) => productService.detabill)
  @JoinColumn({ name: 'Id_product_service', referencedColumnName: 'Id_product_service' })
  productservice: ProductService;
}
