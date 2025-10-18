import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ClientOwnerModule } from './client-owner/client-owner.module';
import { PetModule } from './pet/pet.module';
import { AppointmentModule } from './appointment/appointment.module';
import { AdministrativeStaffModule } from './administrative-staff/administrative-staff.module'; // ← Nuevo

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // tipo de base de datos que estés utilizando
      host: 'localhost', // o la dirección de tu servidor de base de datos
      port: 5432, //
      username: 'postgres',
      password: ' ', // aqui  va  la  contraseña de la base  de  datos
      database: 'veterinary_clinic',// nombre de la base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ruta a las entidades
      synchronize: true, // no usar en producción
    }),
    UserModule,
    ClientOwnerModule,
    PetModule,
    AppointmentModule,
    AdministrativeStaffModule, // 
  ],
})
export class AppModule {}
