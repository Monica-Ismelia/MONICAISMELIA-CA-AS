import { DetaBillService } from './detabill.service';
import { DetaBillController } from './detabill.controller';
import { DetaBill } from './entities/detabill.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DetaBill])],
  providers: [DetaBillService],
  controllers: [DetaBillController],
})
export class DetaBillModule {}
