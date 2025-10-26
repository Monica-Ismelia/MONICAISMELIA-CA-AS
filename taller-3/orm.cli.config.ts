// orm.cli.config.ts
declare const __dirname: string;
import { DataSource } from 'typeorm';

// ⚠️ Asegúrate de que estos valores coincidan exactamente con los de tu AppModule.ts
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432, 
  username: 'postgres',
  password: 'Moni1981', // Tu contraseña
  database: 'veterinary_clinic', // Tu base de datos
  
  // Rutas necesarias para que el CLI encuentre entidades y migraciones
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [
    'src/database/migrations/*.ts', // Define la carpeta de migraciones
  ],
  
  synchronize: true, // ¡Crucial para usar migraciones!
  logging: true,
});