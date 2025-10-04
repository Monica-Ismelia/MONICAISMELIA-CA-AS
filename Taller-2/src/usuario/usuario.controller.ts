import { Controller, Put, Param, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { DeleteManyDto, UsuarioDto } from './dtos/create-update.dto';

// Controlador que maneja todas las rutas relacionadas con "usuario"
@Controller('usuario')
export class UsuarioController {

    /* ─── VERBO PUT ───────────────────────────────────────────── */
    // PUT con parámetro en la URL
    // Ejemplo: PUT http://localhost:3000/usuario/5
    // Reemplaza/actualiza un usuario específico según su ID
    @Put(':id')
    replaceUser(
        @Param('id', ParseIntPipe) id: number,   // Extrae el id de la URL y lo convierte a number
        @Body() body: UsuarioDto                 // Recibe los datos del usuario en el body, validados por el DTO
    ) {
        return { message: 'Usuario actualizado por ID', id, data: body };
    }
 
    // PUT sin parámetro
    // Ejemplo: PUT http://localhost:3000/usuario
    // Actualiza un usuario (usado para casos donde no se envía ID en la URL sino dentro del body)
    @Put()
    replaceUserAll(@Body() body: UsuarioDto) {
        return { message: 'Usuario actualizado', data: body };
    }

    /* ─── VERBO DELETE ───────────────────────────────────────── */
    // DELETE con parámetro en la URL
    // Ejemplo: DELETE http://localhost:3000/usuario/3
    // Elimina un usuario específico por ID
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return { message: 'Usuario eliminado por ID', id };
    }

    // DELETE sin parámetro
    // Ejemplo: DELETE http://localhost:3000/usuario
    // Recibe un array de IDs en el body y los elimina en lote
    @Delete()
    deleteUserAll(@Body() body: DeleteManyDto) {
        return { message: 'Los usuarios que han sido eliminados son:', ids: body };
    }
}
