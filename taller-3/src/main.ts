import { NestFactory } from '@nestjs/core'; //  Importa la función para crear la aplicación NestJS
import { AppModule } from './app.module';// Importa el módulo raíz de la aplicación
import { Client } from 'pg'; // Importa el cliente de PostgreSQL

async function bootstrap() { // Función principal para iniciar la aplicación
  // Configuración de conexión sin base específica
  const client = new Client({ // Configura el cliente de PostgreSQL
    user: 'postgres',// Usuario de la base de datos
    host: 'localhost',// Dirección del servidor de la base de datos
    password: '',// aqui  debe  de  ir Contraseña del usuario
    port: 5432,// Puerto de conexión
  });

  try { // Intenta conectar y crear la base de datos si no existe
    await client.connect(); 
    console.log('🔗 Conectado temporalmente a PostgreSQL');

    // Verifica si existe la base de datos
    const res = await client.query( // Consulta para verificar la existencia de la base de datos
      "SELECT 1 FROM pg_database WHERE datname = 'veterinary_clinic'"
    );// cerrando la consulta

    if (res.rowCount === 0) { // Si no existe, crea la base de datos
      await client.query('CREATE DATABASE veterinary_clinic');// Crea la base de datos
      console.log('✅ Base de datos "veterinary_clinic" creada exitosamente');// Mensaje de éxito
    } else {
      console.log('ℹ️ La base de datos "veterinary_clinic" ya existe');// Mensaje si ya existe
    }
  } catch (error) { 
    console.error('❌ Error al conectar o crear la base de datos:', error);// Mensaje de error
  } finally { // Siempre cierra la conexión temporal
    await client.end();// Cierra la conexión con el servidor de PostgreSQL
  }

  // Inicia la aplicación NestJS normalmente
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('🚀 Aplicación corriendo en http://localhost:3000');
}
bootstrap();
