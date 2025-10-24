import { Specialty } from "../../specialty/entities/specialty.entity";
import { User } from "../../user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn} from "typeorm";

@Entity('medical_staff')
export class MedicalStaff{
    @PrimaryColumn({unique: true})
    Id_users: number;

    user: User;

    @Column()
    identification: string;

    @Column()
    phone: string;

    @Column()
    Id_specialty: number;
    
    @OneToOne(()=> User, (user)=>user.medicalstaff)
    @JoinColumn({ name: 'Id_users', 
        referencedColumnName: 'Id_users'
    })
    users: User

    @ManyToOne(()=>  Specialty, (specialty)=>specialty.medicalstaff)
    @JoinColumn({name: 'Id_specialty', 
        referencedColumnName: 'Id_specialty'})
    specialty: Specialty;

}