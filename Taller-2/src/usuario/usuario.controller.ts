import { Controller, Put, Param, Body, Delete, ParseIntPipe} from '@nestjs/common';
import { DeleteManyDto, UsuarioDto } from './dtos/create-update.dto';

@Controller('usuario')
export class UsuarioController {

    /* <----VERBO PUT ----> */
    @Put(':id')
    replaceUser(@Param('id', ParseIntPipe) id: number, @Body() body: UsuarioDto) {

        return { message: 'Usuario actualizado por ID', id, data: body };
}
    @Put()
    replaceUserAll(@Body() body: UsuarioDto) {

        return { message: 'Usuario actualizado', data: body };
    }

    /* <----VERBO DELETE ---->*/
    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return { message: 'Usuario eliminado por ID', id };
    }

    @Delete()
    deleteUserAll(@Body() body: DeleteManyDto) {
        return { message: 'Los usuarios que han sido eliminados son:', ids: body };
    }
}