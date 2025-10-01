import { Controller, Post, Body, Query, Patch, Param, ValidationPipe, Get, ParseFloatPipe, ParseIntPipe, UsePipes } from '@nestjs/common';
import { JuegoService } from './juego.service';
import { CreateJuegoDto } from './create-juego.dto';

@Controller('juego')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

/* <----VERBO POST ----> */
@Post()
@UsePipes(new ValidationPipe({transform: true }))
createGame(@Body() data: CreateJuegoDto) {
  return { message: 'Juego creado', data };
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
@Param('id', ParseIntPipe) id: number,
@Query('precio', ParseFloatPipe) precio?: number,
@Query('genero') genero?: string
) {
  return { message: 'Juego actualizado', id, cambios: { precio, genero } };
}

/* <----VERBO GET ----> */
@Get('search')
searchGames(@Query('nombre') nombre: string) {
    return { message: 'Búsqueda de juegos', nombre };

}
@Get()
findAll(@Query('precioMax', ParseFloatPipe) precioMax?: number) {
  return {
    message: 'Lista de juegos',
    data: this.juegoService.findAll(precioMax),
  }
}
}