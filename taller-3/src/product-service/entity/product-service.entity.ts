import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductoServiceType } from '../enum/productserviceType';
import { DetaBill } from '../../detabill/entities/detabill.entity';
import { Appointment } from 'src/appointment/entities/appointment.entity';

@Entity('product_service')
export class ProductService {
  @PrimaryGeneratedColumn({ name: 'id_product_service' })
 Id_product_service: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'price', type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({
    name: 'type',
    type: 'enum',
    enum: ProductoServiceType,
  })
  type: ProductoServiceType;

  @OneToMany(() => DetaBill, (detabill) => detabill.productservice)
  detabill: DetaBill[];

  @OneToMany(() => Appointment, (appointment) => appointment.productservice)
  appointments: Appointment[];
}
