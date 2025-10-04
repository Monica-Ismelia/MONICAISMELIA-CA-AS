import {
  Controller,
  Post,
  Body,
  Query,
  Patch,
  Param,
  ValidationPipe,
  Get,
  ParseFloatPipe,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { JuegoService } from './juego.service';
import { CreateJuegoDto } from './dtos/create-juego.dto';

@Controller('juego')
export class JuegoController {
  constructor(private readonly juegoService: JuegoService) {}

  // ─── POST ───────────────────────────────────────────────
  // Crea un nuevo juego usando el DTO con validación automática
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createGame(@Body() data: CreateJuegoDto) {
    const nuevoJuego = this.juegoService.create(data);
    return {
      message: 'Juego creado con éxito',
      data: nuevoJuego,
    };
  }

  // Crea múltiples juegos (opcional)
  @Post('some')
  createSome(@Body() data: any[]) {
    return { message: 'Varios juegos creados', data };
  }

  // ─── PATCH ───────────────────────────────────────────────
  // Actualiza solo el nombre
  @Patch('update-name')
  updateName(@Body() body: { id: number; nombre: string }) {
    return { message: 'Nombre de juego actualizado', data: body };
  }

  // Actualiza por ID usando Query params
  @Patch(':id')
  updateJuego(
    @Param('id', ParseIntPipe) id: number,
    @Query('precio', ParseFloatPipe) precio?: number,
    @Query('genero') genero?: string,
  ) {
    return { message: 'Juego actualizado', id, cambios: { precio, genero } };
  }

  // ─── GET ───────────────────────────────────────────────
  // Buscar juegos por nombre
  @Get('search')
  searchGames(@Query('nombre') nombre: string) {
    return { message: 'Búsqueda de juegos', nombre };
  }

  // Listar todos los juegos o filtrar por precio máximo
  @Get()
  findAll(@Query('precioMax', ParseFloatPipe) precioMax?: number) {
    return {
      message: 'Lista de juegos',
      data: this.juegoService.findAll(precioMax),
    };
  }
}
