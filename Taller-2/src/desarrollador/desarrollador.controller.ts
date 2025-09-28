import {
  Controller,
  Get,          // Para rutas GET
  Put,          // Para rutas PUT (actualización completa)
  Body,         // Para capturar el cuerpo de la petición (JSON)
  Param,        // Para parámetros de URL
  ParseIntPipe, // Valida que el parámetro sea entero
} from '@nestjs/common';
import { DesarrolladorService } from './desarrollador.service';
import { UpdateDesarrolladorDto } from './dto/update-desarrollador.dto';

// Ruta base: /desarrolladores
@Controller('desarrolladores')
export class DesarrolladorController {
  constructor(private readonly desarrolladorService: DesarrolladorService) {}

  // ─── VERBO 1: GET ───────────────────────────────────────

  // Ruta 1: GET /desarrolladores → listar todos
  @Get()
  findAll() {
    return this.desarrolladorService.findAll();
  }

  // Ruta 2: GET /desarrolladores/:id/juegos → ver juegos de un desarrollador
  @Get(':id/juegos')
  getJuegos(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.desarrolladorService.getJuegos(id);
  }

  // ─── VERBO 2: PUT ───────────────────────────────────────

  // Ruta 3: PUT /desarrolladores/:id → actualizar desarrollador completo
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDesarrolladorDto: UpdateDesarrolladorDto // cuerpo JSON
  ) {
    return this.desarrolladorService.update(id, updateDesarrolladorDto);
  }

  // Ruta 4: PUT /desarrolladores/:id/pais → actualizar solo el país
  @Put(':id/pais')
  updatePais(
    @Param('id', ParseIntPipe) id: number,
    @Body('pais') pais: string // Extrae solo la propiedad "pais" del cuerpo
  ) {
    return this.desarrolladorService.updatePais(id, pais);
  }
}
