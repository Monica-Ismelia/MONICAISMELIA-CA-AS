import { Controller, Post, Body, Query, Patch, Param, Get, ParseFloatPipe } from '@nestjs/common';

@Controller('juego')
export class JuegoController {

/* <----VERBO POST ----> */
@Post()
createGame(@Body() data: any) {
        return { message: 'Juego creado', data: data };
}

@Post('some')
createSome(@Body() data: any[]) {
    return { message: 'Some created', data: data };
}

/* <----VERBO PATCH ----> */
@Patch('update-name')
updateName(@Body() body: { id: number; nombre: string }) {
    return { message: 'Nombre de juego actualizado', data: body };
}

@Patch(':id')
updateJuego(
@Param('id') id: string,
@Query() query: { precio?: number; genero?: string }
) {
    return { message: 'Juego actualizado', id, cambios: query };
}

/* <----VERBO GET ----> */
@Get('search')
searchGames(@Query('nombre') nombre: string) {
    return { message: 'Búsqueda de juegos', nombre };

}
@Get()
findAllGames(@Query('precioMax', ParseFloatPipe) precioMax?: number) {
  const list = [
    { id: 1, nombre: 'Zelda', precio: 60 },
    { id: 2, nombre: 'Cyberpunk', precio: 70 },
    { id: 3, nombre: 'Mario', precio: 50 },
  ];

  let filters = list;

  if (precioMax !== undefined) {
    filters = filters.filter((juego) => juego.precio <= precioMax);
  }

  return { message: 'Listado de todos los juegos', data: filters };
}
}