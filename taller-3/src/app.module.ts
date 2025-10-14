import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';// Módulo para integrar TypeORM con NestJS
import { VisitModule } from './visit/visit.module';// Importa el módulo de citas

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Tipo de base de datos
      host: 'localhost', // Dirección del servidor de la base de datos
      port: 5432, // Puerto de conexión
      username: 'postgres', // Usuario de la base de datos
      password: '', // Contraseña del usuario
      database: 'veterinary_clinic', // Nombre de la base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // ⚠️ Solo en desarrollo
    }),
    VisitModule, //
  ],
})
export class AppModule {}
// Exporta la clase AppModule que es el módulo raíz de la aplicación