import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('administrative_staff')
export class AdministrativeStaff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // ← Relación con User (tabla usuarios)

  @Column()
  identification: string; // Identificación (CC, etc.)

  @Column({ nullable: true })
  phone: string;

  @Column({ type: 'date' })
  startDate: string; // Fecha de ingreso

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
