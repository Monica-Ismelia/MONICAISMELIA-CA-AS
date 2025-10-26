import { Appointment } from '../../appointment/entities/appointment.entity';
import { ClientOwner } from '../../client-owner/entities/client-owner.entity';
import { MedicalHistory } from '../../medical-history/entities/medical-history.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn({ name: 'Id_pet' })
  Id_pet: number;

  @Column()
  name: string;

  @Column()
  species: string;

  @Column()
  breed: string;

  @Column()
  sex: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  weight: number;

  @Column({ nullable: true })
  observations: string;

  @Column()
  Id_client: number; // 👈 nombre del campo FK igual al de ClientOwner

  @ManyToOne(() => ClientOwner, (clientOwner) => clientOwner.pets)
  @JoinColumn({
    name: 'Id_client',               // 👈 nombre en la tabla pets
    referencedColumnName: 'Id_client' // 👈 nombre en client_owners
  })
  client: ClientOwner;

  @OneToMany(() => Appointment, (appointment) => appointment.pet)
  appointments: Appointment[];

  @OneToOne(() => MedicalHistory, (medicalHistory) => medicalHistory.pet)
  medicalHistory: MedicalHistory;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
