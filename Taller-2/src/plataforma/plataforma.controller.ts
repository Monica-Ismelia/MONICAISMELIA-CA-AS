import {
  Controller,
  Get,          // Decorador para rutas GET
  Delete,       // Decorador para rutas DELETE
  Param,        // Para capturar parámetros de la URL (ej: /:id)
  ParseIntPipe, // Valida que el parámetro sea un número entero
  Put, 
  Post,        // Para el verbo POST
  Body,          // Para recibir el cuerpo JSON de la petición
  HttpStatus, 
  HttpException,
  
} from '@nestjs/common';
import { PlataformaService } from './plataforma.service';
import { UpdatePlataformaDto } from './dto/update-plataforma.dto'; //  Importamos el DTO
import { CreatePlataformaDto } from './dto/create-plataforma.dto'

@Controller('plataformas')
export class PlataformaController {
  constructor(private readonly plataformaService: PlataformaService) {}

  // ─── VERBO 1: GET ───────────────────────────────────────────────
// Ruta 1: GET /plataformas → devuelve todas las plataformas
 @Get()
  findAll() {
    return this.plataformaService.findAll();
  }

  // Ruta 2: GET /plataformas/:id/juegos → devuelve los juegos de una plataforma
  // @Param('id', ParseIntPipe) → extrae 'id' de la URL y 
  // valida que sea número
  @Get(':id/juegos')
  getJuegos(@Param('id', ParseIntPipe) id: number) {
    return this.plataformaService.getJuegos(id);
  }

  // ruta 3: POST: crear nueva plataforma
  @Post()
  create(@Body() createPlataformaDto: CreatePlataformaDto) {
    const nueva = this.plataformaService.create(createPlataformaDto);
    if (!nueva) {
      throw new HttpException('Error al crear plataforma', HttpStatus.BAD_REQUEST);
    }
    return {
      statusCode: HttpStatus.CREATED,
      mensaje: 'Plataforma creada con éxito',
      data: nueva,
    };
  }
// ─── VERBO 2: PUT ───────────────────────────────────────────────
  // Ruta 4: PUT /plataformas/:id → actualiza una plataforma
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number, // Captura el ID desde la URL
    @Body() updatePlataformaDto: UpdatePlataformaDto // Captura el cuerpo JSON
  ) {
    return this.plataformaService.update(id, updatePlataformaDto);
  }

  // ─── VERBO 3: DELETE ────────────────────────────────────

 // Ruta 5: DELETE /plataformas/:id → elimina una plataforma
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.plataformaService.remove(id);
  }

}
