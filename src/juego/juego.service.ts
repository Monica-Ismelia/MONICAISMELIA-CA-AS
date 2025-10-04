import { Injectable } from '@nestjs/common';

@Injectable()
export class JuegoService {
    private juegos = [
        { id: 1, nombre: 'The Legend of Zelda: Breath of the Wild', genero: 'Aventura', plataforma: 'Nintendo Switch', precio: 59.99 },
        { id: 2, nombre: 'God of War', genero: 'Acción', plataforma: 'PlayStation 4', precio: 49.99 },
        { id: 3, nombre: 'Red Dead Redemption 2', genero: 'Acción/Aventura', plataforma: 'PlayStation 4, Xbox One, PC', precio: 59.99 },
        { id: 4, nombre: 'Minecraft', genero: 'Sandbox', plataforma: 'Multiplataforma', precio: 29.99 },
        { id: 5, nombre: 'The Witcher 3: Wild Hunt', genero: 'RPG', plataforma: 'PlayStation 4, Xbox One, PC', precio: 39.99 },
    ];

    findAll(precioMax?: number) {
        if (precioMax != undefined) {
            return this.juegos.filter(juego => juego.precio <= precioMax);
        }
        return this.juegos;
    }
}