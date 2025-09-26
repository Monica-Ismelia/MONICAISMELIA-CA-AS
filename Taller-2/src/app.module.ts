import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JuegoModule } from './juego/juego.module';
import { PlataformaModule } from './plataforma/plataforma.module';
import { DesarrolladorModule } from './desarrollador/desarrollador.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [JuegoModule, PlataformaModule, DesarrolladorModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
