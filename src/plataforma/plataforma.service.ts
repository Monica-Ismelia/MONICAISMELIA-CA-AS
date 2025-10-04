import { Injectable } from '@nestjs/common';

// Marca esta clase como un proveedor de servicios (inyectable)
@Injectable()
export class PlataformaService {
  // Datos simulados (en lugar de base de datos)
  private plataformas = [
    { id: 1, nombre: 'Nintendo Switch', fabricante: 'Nintendo' },
    { id: 2, nombre: 'PC', fabricante: 'Microsoft' },
  ];

  private juegos = [
    { id: 1, nombre: 'Zelda', idPlataforma: 1 },
    { id: 2, nombre: 'Cyberpunk', idPlataforma: 2 },
  ];

  // Devuelve todas las plataformas
  findAll() {
    return this.plataformas;
  }

  // Devuelve los juegos asociados a una plataforma (por idPlataforma)
  getJuegos(id: number) {
    return this.juegos.filter(j => j.idPlataforma === id);
  }

  // Elimina una plataforma por ID
  remove(id: number) {
    const index = this.plataformas.findIndex(p => p.id === id);
    if (index !== -1) {
      return this.plataformas.splice(index, 1)[0]; // splice devuelve el eliminado
    }
    return null;
  }

  // Elimina un juego de una plataforma específica
  removeJuego(id: number, juegoId: number) {
    const index = this.juegos.findIndex(j => j.id === juegoId && j.idPlataforma === id);
    if (index !== -1) {
      return this.juegos.splice(index, 1)[0];
    }
    return null;
  }
}
