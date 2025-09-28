import { Injectable } from '@nestjs/common';
import { UpdateDesarrolladorDto } from './dto/update-desarrollador.dto';

@Injectable()
export class DesarrolladorService {
  // Datos simulados
  private desarrolladores = [
    { id: 1, nombre: 'Nintendo EPD', pais: 'Japón', fundacion: '1984-01-01' },
  ];

  private juegos = [
    { id: 1, nombre: 'Zelda', idDesarrollador: 1 },
  ];

  // Lista todos los desarrolladores
  findAll() {
    return this.desarrolladores;
  }

  // Devuelve los juegos creados por un desarrollador
  getJuegos(id: number) {
    return this.juegos.filter(j => j.idDesarrollador === id);
  }

  // Actualiza todo el objeto del desarrollador
  update(id: number, updateDesarrolladorDto: UpdateDesarrolladorDto) {
    const index = this.desarrolladores.findIndex(d => d.id === id);
    if (index !== -1) {
      this.desarrolladores[index] = { ...this.desarrolladores[index], ...updateDesarrolladorDto };
      return this.desarrolladores[index];
    }
    return null;
  }

  // Actualiza solo el campo "pais"
  updatePais(id: number, pais: string) {
    const dev = this.desarrolladores.find(d => d.id === id);
    if (dev) {
      dev.pais = pais;
      return dev;
    }
    return null;
  }
}
