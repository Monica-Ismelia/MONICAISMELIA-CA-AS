import { Controller, Put, Param, Body, Delete} from '@nestjs/common';

@Controller('usuario')
export class UsuarioController {

    /* <----VERBO PUT ----> */
    @Put(':id')
    replaceUser(@Param('id') id: number, @Body() body: {nombre: string, edad: number, email: string}) {

        return { message: 'Usuario actualizado por ID', id, data: body };
}
    @Put()
    replaceUserAll(@Body() body: {nombre: string, edad: number, email: string}) {

        return { message: 'Usuario actualizado', data: body };
    }

    /* <----VERBO DELETE ---->*/
    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        return { message: 'Usuario eliminado por ID', id };
    }

    @Delete()
    deleteUserAll(@Body() body: {ids:number[]}) {
        return { message: 'Los usuarios que han sido eliminados son:', ids: body.ids };
    }
}