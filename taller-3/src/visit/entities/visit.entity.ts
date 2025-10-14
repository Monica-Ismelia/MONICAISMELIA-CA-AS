import { Entity,PrimaryGeneratedColumn,Column } from 'typeorm'; // Importa decoradores de TypeORM para definir entidades y columnas
@Entity() // Decorador que marca la clase como una entidad de base de datos
export class Visit { // Define la clase Visit que representa la entidad "Cita"
    @PrimaryGeneratedColumn() // Decorador que indica que esta columna es una clave primaria generada automáticamente
    id: number; // Columna que almacena el ID único de la cita

    @Column({type: 'timestamp'}) //crea una columna que guarda fecha y hora exactas
    date: Date; // Columna que almacena la fecha y hora de la cita

    @Column() // Decorador que indica que es una columna en la base de datos
    reason: string; // Columna que almacena el motivo de la cita

    @Column({default : 'programada'}) // indica que es una columna en la base de datos con valor por defecto
    status: string; // Columna que almacena el estado de la cita (programada, completada, cancelada, etc.)  
    
    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    petId?: string;

}
