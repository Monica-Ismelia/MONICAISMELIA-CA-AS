import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';
import { Rol } from './entities/rol_entities.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol]), TypeOrmModule.forFeature([User]) ],
  controllers: [RolController],
  providers: [RolService]
})
export class RolModule {}
