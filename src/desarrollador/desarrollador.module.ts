import { Module } from '@nestjs/common';
import { DesarrolladorController } from './desarrollador.controller';
import { DesarrolladorService } from './desarrollador.service';

@Module({
  controllers: [DesarrolladorController],
  providers: [DesarrolladorService]
})
export class DesarrolladorModule {}
