# 🐾 Taller #3 – Sistema de Gestión de Clínica Veterinaria

Este proyecto es un sistema backend desarrollado en **NestJS** que permite gestionar una clínica veterinaria, incluyendo clientes, mascotas, veterinarios, citas e historial médico.

## 👥 Integrantes del grupo

- Maria  Camila Guevara Ramirez: Entidades y relaciones + Diagramas 
- Monica Ismelia Cañas Reyes  CRUD de Citas + entidades
- Dajarthy Yenerys Hernandez Cuellar: Seguridad + Documentación 

## 🧩 Entidades principales
- **Cliente*client*: Dueño de las mascotas.
- **Mascota*pet*: Animal registrado en la clínica.
- **Veterinario*veterinarian*: Profesional que atiende las citas.
- **Cita*visit*: Registro de una consulta programada.
- **Historial Médico*medical-history*: Detalle de diagnósticos y tratamientos.

## 🔗 Relaciones
- Cliente → Mascota (1:N)
- Mascota ↔ Historial Médico (1:1)
- Mascota → Cita (1:N)
- Veterinario → Cita (1:N)
- Cita ↔ Historial Médico (1:1)

## 🛠️ Tecnologías utilizadas
- **Framework**: NestJS
- **Base de datos**: PostgreSQL
- **ORM**: TypeORM
- **Seguridad***


## 🚀 Cómo ejecutar el proyecto

### Requisitos previos
- Node.js 
- PostgreSQL 

