import {
  Controller,
  Get,          // Decorador para rutas GET
  Delete,       // Decorador para rutas DELETE
  Param,        // Para capturar parámetros de la URL (ej: /:id)
  ParseIntPipe, // Valida que el parámetro sea un número entero
} from '@nestjs/common';
import { PlataformaService } from './plataforma.service';

// Define la ruta base: /plataformas
@Controller('plataformas')
export class PlataformaController {
  // Inyecta el servicio para usar su lógica
  constructor(private readonly plataformaService: PlataformaService) {}

  // ─── VERBO 1: GET ───────────────────────────────────────

  // Ruta 1: GET /plataformas → listar todas las plataformas
  @Get()
  findAll() {
    return this.plataformaService.findAll(); // Llama al servicio
  }

  // Ruta 2: GET /plataformas/:id/juegos → ver juegos de una plataforma
  @Get(':id/juegos')
  getJuegos(
    @Param('id', ParseIntPipe) id: number // Valida que 'id' sea número
  ) {
    return this.plataformaService.getJuegos(id);
  }

  // ─── VERBO 2: DELETE ────────────────────────────────────

  // Ruta 3: DELETE /plataformas/:id → eliminar una plataforma
  @Delete(':id')
  remove(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.plataformaService.remove(id);
  }

  // Ruta 4: DELETE /plataformas/:id/juegos/:juegoId → quitar un juego de una plataforma
  @Delete(':id/juegos/:juegoId')
  removeJuego(
    @Param('id', ParseIntPipe) id: number,        // ID de la plataforma
    @Param('juegoId', ParseIntPipe) juegoId: number // ID del juego
  ) {
    return this.plataformaService.removeJuego(id, juegoId);
  }
}
