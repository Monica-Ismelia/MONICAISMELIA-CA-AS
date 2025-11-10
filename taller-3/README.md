🐾 Taller 3 - Clínica Veterinaria (Backend - NestJS)
Este repositorio contiene la implementación del backend para el Taller #3, correspondiente al desarrollo de un sistema para la Clínica Veterinaria, aplicando buenas prácticas de arquitectura y seguridad con NestJS.
______________________________________________________________________________________________
👩💻 Integrantes del grupo
•	María Camila Guevara Ramírez → Seguridad y Documentación
•	Mónica Ismelia Cañas Reyes → CRUD y Entidades
•	Dajarthy Yenerys Hernández Cuéllar → Diagrama, Base de Datos y Relaciones
______________________________________________________________________________________________
🛠️ Tecnologías utilizadas
•	Framework: NestJS
•	Base de datos: PostgreSQL
•	ORM: TypeORM
•	Validación: class-validator / class-transformer
•	Seguridad: JWT, Passport y Guards personalizados
•	Lenguaje: TypeScript
_______________________________________________________________________________________________
⚙️ Configuración del entorno

2️⃣ Instalar dependencias
npm install
3️⃣ Crear el archivo .env en la raíz del proyecto con la configuración:
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=veterinaria
JWT_SECRET=clave_segura
JWT_EXPIRATION=1d
4️⃣ Crear la base de datos en PostgreSQL
Ejecuta en tu gestor de base de datos:
CREATE DATABASE veterinaria;
________________________________________________________________________________________________
🚀 Ejecución del proyecto
🔹 Modo desarrollo
npm run start:dev
🔹 Modo producción
npm run build
npm run start:prod
Servidor disponible en 👉 http://localhost:3000
________________________________________________________________________________________________
🧩 Migraciones con TypeORM
Estos comandos permiten gestionar la creación y ejecución de las migraciones:
"scripts": {
  "typeorm": "ts-node ./node_modules/typeorm/cli.js -d ./orm.cli.config.ts",
  "migration:generate": "npm run typeorm -- migration:generate src/database/migrations/NewEntities",
  "migration:run": "npm run typeorm -- migration:run",
  "migration:revert": "npm run typeorm -- migration:revert"
}
🪄 Ejemplo de uso
•	Crear nueva migración:
•	npm run migration:generate
•	Ejecutar migraciones:
•	npm run migration:run
•	Revertir última migración:
•	npm run migration:revert
________________________________________________________________________________________________
🔐 Seguridad
El proyecto implementa autenticación con JWT (JSON Web Token) y protección de rutas mediante guards personalizados.
También incluye decoradores como @Roles(), @Public() y middlewares para auditoría de acceso.
________________________________________________________________________________________________
🩺 Estado actual del proyecto
✅ Entidades conectadas
✅ CRUD funcional
✅ Seguridad implementada
✅ Migraciones ejecutadas correctamente
✅ Proyecto probado en entorno local
________________________________________________________________________________________________
                                           👩💻
